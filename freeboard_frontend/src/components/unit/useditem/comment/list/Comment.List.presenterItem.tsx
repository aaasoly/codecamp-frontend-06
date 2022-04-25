import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./Comment.List.styles";

export default function UseditemQuestionListItem(props) {
  return (
    <S.Question__Wrapper>
      <S.Wrapper__Left></S.Wrapper__Left>

      <S.Wrapper__Body>
        <S.UserName>{props.el.user.name}</S.UserName>
        <S.Contents>{props.el.contents}</S.Contents>
        <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
      </S.Wrapper__Body>

      <S.Wrapper__Right></S.Wrapper__Right>
    </S.Question__Wrapper>
  );
}
