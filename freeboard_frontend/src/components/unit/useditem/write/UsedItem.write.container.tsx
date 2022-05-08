import { useRouter } from "next/router";
import CreateUsedItemUI from "./UsedItem.write.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./UsedItem.write.queries";
import { useEffect, useState } from "react";
import useAuth from "../../../../commons/hooks/useAuth";
import { useRecoilState } from "recoil";
import {
  getLatState,
  getLngState,
  useditemAddressState,
} from "../../../../commons/store";
import _ from "lodash";

export default function CreateUsedItem(props) {
  const router = useRouter();

  const [useditemAddress, setUseditemAddress] =
    useRecoilState(useditemAddressState);
  const [getLat, setGetLat] = useRecoilState(getLatState);
  const [getLng, setGetLng] = useRecoilState(getLngState);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const [hashtag, setHashtag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      // setHashArr((prev) => [...prev, hashtag]);
      // setHashtag("");
      setHashArr([...hashArr, "#" + event.target.value]);
      event.target.value = "";
    }
  };

  const {
    register,
    handleSubmit,
    formState,
    setValue,
    trigger,
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const onChangeAddress = (event) => {
    setUseditemAddress(event.target.value);
  };

  const onChangeContents = (value: string) => {
    // console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  console.log("밑에가 result");

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: hashArr,
            images: fileUrls,
            useditemAddress: {
              address: useditemAddress,
              lat: getLat,
              lng: getLng,
            },
          },
        },
      });
      console.log(result);
      alert("게시물 등록에 성공했습니다");
      // setUseditemAddress("");
      // setGetLat("");
      // setGetLng("");
      router.push(`/market/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async (data) => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchUseditem.images);
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

    const updateUseditemInput = {};
    if (data.name) updateUseditemInput.name = data.name;
    if (data.contents) updateUseditemInput.contents = data.contents;
    if (data.price) updateUseditemInput.price = Number(data.price);
    if (data.remarks) updateUseditemInput.remarks = data.remarks;
    if (isChangedFiles) updateUseditemInput.images = fileUrls;
    if (useditemAddress || getLng || getLat) {
      updateUseditemInput.useditemAddress = {};
      if (useditemAddress)
        updateUseditemInput.useditemAddress.address = useditemAddress;
      if (getLng) updateUseditemInput.useditemAddress.lng = getLng;
      if (getLat) updateUseditemInput.useditemAddress.lat = getLat;
    }

    try {
      await updateUseditem({
        variables: {
          useditemId: String(router.query.useditemId),
          // name: data.name,
          // remarks: data.remarks,
          // contents: data.contents,
          // detail: data.detail,
          // price: Number(data.price),
          // tags: data.tags,
          updateUseditemInput,
        },
      });
      alert("수정 되었습니다.");
      router.push(`/market/${router.query.useditemId}`);
      setUseditemAddress("");
      setGetLat("");
      setGetLng("");
    } catch (error) {
      console.log(error.message);
    }
  };

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
    />
  );
}
