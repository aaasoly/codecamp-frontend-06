import { useForm } from "react-hook-form";
import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
import { yupResolver } from "@hookform/resolvers/yup";

export default function CreateUsedItemUI(props) {
  const { register, handleSubmit, formState } = useForm({
    //resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(props.onClickSubmit)}>
      <div>상품명</div>
      <Input01 type="text" register={register("name")} />
      <div>한 줄 요약</div>
      <Input01 type="text" register={register("remark")} />
      <div>상품설명</div>
      <Input01 type="text" register={register("detail")} />
      <div>판매가격</div>
      <Input01 type="text" register={register("price")} />
      <div>태그입력</div>
      <Input01 type="text" register={register("tag")} />
      <Button01 isActive={formState.isValid} title="등록하기"></Button01>
    </form>
  );
}
