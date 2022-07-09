import * as S from "./Answer.Write.styles";
import { IUseditemQuestionAnswerWriteUIProps } from "./Answer.Write.types";

export default function UseditemQuestionAnswerWriteUI(
  props: IUseditemQuestionAnswerWriteUIProps
) {
  return (
    <S.Wrapper>
      {props?.isEdit ? (
        <S.Contents
          type="text"
          onChange={props.onChangeReply}
          defaultValue={props.reply || props.AnswerEl?.contents || ""}
        ></S.Contents>
      ) : (
        <S.Contents type="text" onChange={props.onChangeReply}></S.Contents>
      )}

      <S.WrapperBottom>
        <S.CreateButton
          onClick={
            props.isEdit ? props.onClickUpdateAnswer : props.onClickCreateAnswer
          }
        >
          {props.isEdit ? "수정" : "등록"}
        </S.CreateButton>
      </S.WrapperBottom>
    </S.Wrapper>
  );
}
