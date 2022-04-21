import { useRouter } from "next/router";
// import { useState } from "react";
import CreateUsedItemUI from "./UsedItem.write.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./UsedItem.write.queries";

export default function CreateUsedItem() {
  const router = useRouter();

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [createUseditem] = useMutation(CREATE_USED_ITEM);

  const { register, handleSubmit, formState, setValue, trigger } = useForm();

  const onChangeContents = (value: string) => {
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickSubmit = async (data) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            detail: data.detail,
            price: Number(data.price),
            tags: data.tags,
          },
          images: fileUrls,
        },
      });
      console.log(result);
      alert("게시물 등록에 성공했습니다");
      router.push("/markets");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CreateUsedItemUI
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChangeContents={onChangeContents}
      fileUrls={fileUrls}
    />
  );
}
