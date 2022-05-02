import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import UseditemQuestionWrite from "../write/Question.Write.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./Comment.List.queries";
import * as S from "./Comment.List.styles";

export default function UseditemQuestionListItem(props) {
  const login = props.logindata?.fetchUserLoggedIn.email;
  const question = props.el.user.email;

  const router = useRouter();

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  // 문의하기 수정 상태값 설정
  const [isEdit, setIsEdit] = useState(false);

  // 🔥 문의하기 삭제
  const onClickDeleteQuestion = async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: props.el._id },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],

        // update(cache, {data}){
        //   cache.modify({
        //     fields: {
        //       fetchUseditemsQuestions: (prev, {readField}) => {
        //         const filteredPrev = prev.filter((el) => readField("_id", el) !== )
        //       }
        //     }
        //   })
        // }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onClickMoveToUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
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
                <S.EditButton id={props.el._id} onClick={onClickMoveToUpdate}>
                  수정
                </S.EditButton>
                <S.DeleteButton
                  id={props.el._id}
                  onClick={onClickDeleteQuestion}
                >
                  삭제
                </S.DeleteButton>
              </S.MyQuestion>
            ) : (
              <div></div>
            )}
          </S.Wrapper__Right>
        </S.Question__Wrapper>
      )}
      {isEdit === true && (
        <UseditemQuestionWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
    </>
  );
}
