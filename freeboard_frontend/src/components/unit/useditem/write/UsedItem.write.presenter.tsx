import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
// import { yupResolver } from "@hookform/resolvers/yup";

export default function CreateUsedItemUI(props: any) {
  return (
    <>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <div>상품명</div>
        <Input01 type="text" register={props.register("name")} />
        <div>한 줄 요약</div>
        <Input01 type="text" register={props.register("remarks")} />
        <div>상품설명</div>
        <Input01 type="text" register={props.register("detail")} />
        <div>판매가격</div>
        <Input01 type="text" register={props.register("price")} />
        <div>태그입력</div>
        <Input01 type="text" register={props.register("tags")} />
        <Button01
          isActive={props.formState.isValid}
          title="등록하기"
        ></Button01>
      </form>
    </>
  );
}
