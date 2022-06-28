import * as S from "./Question.Write.styles";
import { IUseditemQuestionWriteUIProps } from "./Question.Write.types";

export default function UseditemQuestionWriteUI(
  props: IUseditemQuestionWriteUIProps
) {
  return (
    <S.Wrapper>
      <S.Contents
        placeholder="판매자에게 궁금한 사항을 물어보세요."
        onChange={props.onChangeContents}
        defaultValue={props.contents || props.el?.contents || ""}
      ></S.Contents>

      <S.WrapperBottom>
        <S.CreateButton
          onClick={
            props.isEdit
              ? props.onClickUpdateQuestion
              : props.onClickCreateQuestion
          }
        >
          {props.isEdit ? "수정" : "등록"}
        </S.CreateButton>
      </S.WrapperBottom>
    </S.Wrapper>
  );
}
