import { useRouter } from "next/router";
import CreateUsedItemUI from "./UsedItem.write.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./UsedItem.write.queries";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import useAuth from "../../../../commons/hooks/useAuth";
import { useRecoilState } from "recoil";
import { useditemAddressState } from "../../../../commons/store";
import {
  ICreateUsedItemProps,
  IFormValues,
  IUpdateUsdeitemInput,
} from "./Useditem.write.types";

export default function CreateUsedItem(props: ICreateUsedItemProps) {
  const router = useRouter();

  const [useditemAddress, setUseditemAddress] =
    useRecoilState(useditemAddressState);

  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [addrDetail, setAddrDetail] = useState("");

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const [hashArr, setHashArr] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  const onKeyUpHash = (event: ChangeEvent<HTMLInputElement> | any) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  const deleteTag = (event: MouseEvent<HTMLSpanElement> | any) => {
    const updateTag = hashArr.filter((tag) => tag !== event.target.innerHTML);
    setHashArr(updateTag);
  };

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset,
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  const onChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setUseditemAddress(event.target.value);
  };

  const onChangeAddrDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddrDetail(event.target.value);
  };

  const handleComplete = (address: any) => {
    setPostcode(address.zonecode);
    setAddress(address.address);
    setIsOpen(false);
  };

  const onChangeContents = (value: string) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (data: IFormValues) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tag,
            images: fileUrls,
            useditemAddress: {
              address: data.address,
              zipcode: data.postcode,
              addressDetail: data.addrDetail,
            },
          },
        },
      });
      console.log(result);
      alert("게시물 등록에 성공했습니다");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = async (data: IFormValues) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const isChangedFiles = currentFiles !== defaultFiles;
    // if (
    //   !data.name &&
    //   !data.remarks &&
    //   !data.contents &&
    //   !data.detail &&
    //   !data.price &&
    //   !data.tag &&
    //    !isChangedFiles
    // ) {
    //   alert("수정한 내용이 없습니다");
    //   return;
    // } else {

    // }

    const updateUseditemInput: IUpdateUsdeitemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    if (address || postcode || addrDetail) {
      updateUseditemInput.useditemAddress = {};
      if (address) updateUseditemInput.useditemAddress.address = address;
      if (postcode) updateUseditemInput.useditemAddress.zipcode = postcode;
      if (addrDetail)
        updateUseditemInput.useditemAddress.addressDetail = addrDetail;
    }
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    try {
      await updateUseditem({
        variables: {
          useditemId: String(router.query.useditemId),

          updateUseditemInput,
        },
      });
      alert("수정 되었습니다.");
      router.push(`/market/${router.query.useditemId}`);
      setUseditemAddress("");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const watchAll = Object.values(watch());

  useEffect(() => {
    if (watchAll.every((el) => el) && fileUrls.some((el) => el)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [watchAll, fileUrls]);

  useEffect(() => {
    reset({ contents: props.data?.fetchUseditem.contents });
  }, [props.data]);

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);

  return (
    <CreateUsedItemUI
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      onChangeAddress={onChangeAddress}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
      data={props.data}
      useditemAddress={useditemAddress}
      onKeyUpHash={onKeyUpHash}
      hashArr={hashArr}
      getValues={getValues}
      isOpen={isOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      postcode={postcode}
      address={address}
      addrDetail={addrDetail}
      onChangeAddrDetail={onChangeAddrDetail}
      deleteTag={deleteTag}
      isActive={isActive}
    />
  );
}
