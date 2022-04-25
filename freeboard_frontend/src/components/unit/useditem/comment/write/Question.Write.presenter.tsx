import * as S from "./Question.Write.styles";

export default function UseditemQuestionWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Contents
        type="text"
        placeholder="개인정보웅애웅"
        onChange={props.onChangeContents}
      ></S.Contents>

      <S.Wrapper__Bottom>
        <S.WordCount></S.WordCount>
        <S.CreateButton onClick={props.onClickCreateQuestion}>
          문의하기
        </S.CreateButton>
      </S.Wrapper__Bottom>
    </S.Wrapper>
  );
}
