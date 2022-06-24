import * as S from "./Question.Write.styles";

export default function UseditemQuestionWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Contents
        type="text"
        placeholder="판매자에게 궁금한 사항을 물어보세요."
        onChange={props.onChangeContents}
        defaultValue={props.contents || props.el?.contents || ""}
      ></S.Contents>

      <S.Wrapper__Bottom>
        <S.CreateButton
          onClick={
            props.isEdit
              ? props.onClickUpdateQuestion
              : props.onClickCreateQuestion
          }
        >
          {props.isEdit ? "수정" : "등록"}
        </S.CreateButton>
      </S.Wrapper__Bottom>
    </S.Wrapper>
  );
}
