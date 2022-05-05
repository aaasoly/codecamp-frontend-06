import * as S from "./Reply.Write.styles";

export default function UseditemQuestionWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Contents
        type="text"
        placeholder="개인정보웅애웅"
        onChange={props.onChangeContents}
        defaultValue={props.contents || props.el?.contents || ""}
      ></S.Contents>

      <S.Wrapper__Bottom>
        <S.WordCount></S.WordCount>
        <S.CreateButton
          onClick={
            props.isEdit ? props.onClickUpdateAnswer : props.onClickCreateAnswer
          }
        >
          답글달기
        </S.CreateButton>
      </S.Wrapper__Bottom>
    </S.Wrapper>
  );
}
