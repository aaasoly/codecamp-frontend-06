import { useRouter } from "next/router";
import { useState } from "react";
import CreateUsedItemUI from "./UsedItem.write.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM } from "./UsedItem.write.queries";

export default function CreateUsedItem() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [remark, setRemark] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  // const onChangeName = (event) => {
  //   setName(event.target.value);
  // };
  // const onChangeRemark = (event) => {
  //   setRemark(event.target.value);
  // };
  // const onChangeDetail = (event) => {
  //   setDetail(event.target.value);
  // };
  // const onChangePrice = (event) => {
  //   setPrice(event.target.value);
  // };
  // const onChangeTag = (event) => {
  //   setTag(event.target.value);
  // };

  const onClickSubmit = async () => {
    try {
      const result = await createUsedItem({
        variables: {
          name,
          remark,
          detail,
          price,
          tag,
        },
      });
      console.log(result);
      alert("게시물 등록에 성공했습니다");
      //router.push()
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CreateUsedItemUI
      // onChangeName={onChangeName}
      // onChangeRemark={onChangeRemark}
      // onChangeDetail={onChangeDetail}
      // onChangePrice={onChangePrice}
      // onChangeTag={onChangeTag}
      onClickSubmit={onClickSubmit}
    />
  );
}
