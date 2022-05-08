import * as S from "./Answer.Write.styles";

export default function UseditemQuestionAnswerWriteUI(props) {
  // console.log(props.el._id);
  return (
    <S.Wrapper>
      {props?.isEdit ? (
        <S.Contents
          type="text"
          placeholder="개인정보웅애웅"
          onChange={props.onChangeReply}
          defaultValue={props.reply || props.AnswerEl?.contents || ""}
        ></S.Contents>
      ) : (
        <S.Contents
          type="text"
          placeholder="개인정보웅애웅"
          onChange={props.onChangeReply}
          // defaultValue={props.reply || props.AnswerEl?.contents || ""}
        ></S.Contents>
      )}

      <S.Wrapper__Bottom>
        <S.WordCount></S.WordCount>
        <S.CreateButton
          onClick={
            props.isEdit ? props.onClickUpdateAnswer : props.onClickCreateAnswer
          }
        >
          {props.isEdit ? "수정하기" : "답글달기"}
        </S.CreateButton>
      </S.Wrapper__Bottom>
    </S.Wrapper>
  );
}
