import * as S from "./Question.Write.styles";

export default function UseditemQuestionWriteUI() {
  return (
    <S.Wrapper>
      <S.Contents type="text" placeholder="개인정보웅애웅"></S.Contents>

      <S.Wrapper__Bottom>
        <S.WordCount></S.WordCount>
        <S.CreateButton>문의하기</S.CreateButton>
      </S.Wrapper__Bottom>
    </S.Wrapper>
  );
}
