import { useRouter } from "next/router";
import { useState } from "react";
import CreateUsedItemUI from "./UsedItem.write.presenter";

export default function CreateUsedItem() {
  const router = useRouter();

  const [name, setName] = useStata("");
  const [remark, setRemark] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");

  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeRemark = (event) => {
    setRemark(event.target.value);
  };
  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const onChangeTag = (event) => {
    setTag(event.target.value);
  };

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
      onChangeName={onChangeName}
      onChangeRemark={onChangeRemark}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onChangeTag={onChangeTag}
      onClickSubmit={onClickSubmit}
    />
  );
}
