import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./Comment.List.styles";

export default function UseditemQuestionListItem(props) {
  const login = props.logindata?.fetchUserLoggedIn.email;
  const question = props.el.user.email;

  return (
    <S.Question__Wrapper>
      <S.Wrapper__Left></S.Wrapper__Left>

      <S.Wrapper__Body>
        <S.UserName>{props.el.user.name}</S.UserName>
        <S.Contents>{props.el.contents}</S.Contents>
        <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
      </S.Wrapper__Body>

      <S.Wrapper__Right>
        {login === question ? (
          <S.MyQuestion>
            <S.EditButton>수정</S.EditButton>
            <S.DeleteButton>삭제</S.DeleteButton>
          </S.MyQuestion>
        ) : (
          <div></div>
        )}
      </S.Wrapper__Right>
    </S.Question__Wrapper>
  );
}
