import { useQuery } from "@apollo/client";
import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./Comment.List.styles";
// import {
//   DELETE_USED_ITEM_QUESTION,
//   FETCH_USED_ITEM_QUESTIONS,
// } from "./Comment.List.queries";

export default function UseditemQuestionListItem(props) {
  const login = props.logindata?.fetchUserLoggedIn.email;
  const question = props.el.user.email;

  // const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);
  // const { deleteUseditemQuestion } = useQuery(DELETE_USED_ITEM_QUESTION);

  // const onClickDelete = () => {
  //   deleteUseditemQuestion({
  //     variables: { useditemQuestionId: data._id },

  //     update(cache, {data}){
  //       cache.modify({
  //         fields: {
  //           fetchUseditemsQuestions: (prev, {readField}) => {
  //             const filteredPrev = prev.filter((el) => readField("_id", el) !== )
  //           }
  //         }
  //       })
  //     }
  //   });
  // };

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
