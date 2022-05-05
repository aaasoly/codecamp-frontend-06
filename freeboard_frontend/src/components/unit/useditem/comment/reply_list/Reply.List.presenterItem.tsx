import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import UseditemReplyWrite from "../reply/Reply.Write.container";

import UseditemQuestionWrite from "../write/Question.Write.container";
import UseditemQuestionAnswerListUI from "./Reply.List.presenter";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEMS_QUESTION_ANSWERS,
} from "./Reply.List.queries";
import * as S from "./Reply.List.styles";

export default function UseditemQuestionAnswersListItem(props) {
  const login = props.logindata?.fetchUserLoggedIn.email;
  const question = props.el.user.email;

  const router = useRouter();

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  // 문의하기 수정 상태값 설정
  const [isEdit, setIsEdit] = useState(false);

  // 답댓글 달기 상태값 설정
  const [createReply, setCreateReply] = useState(false);

  // 🔥 문의하기 삭제
  const onClickDeleteQuestionAnswer = async (event) => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: { useditemQuestionId: props.el._id },

        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el_.id },
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

  const onClickCreateReply = () => {
    setCreateReply(true);
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
                  // onClick={onClickDeleteQuestion}
                >
                  삭제
                </S.DeleteButton>
              </S.MyQuestion>
            ) : (
              <S.EditButton onClick={onClickDeleteQuestionAnswer}>
                댓글
              </S.EditButton>
            )}
          </S.Wrapper__Right>
        </S.Question__Wrapper>
      )}
      {/* 댓글 수정 인풋 */}
      {isEdit === true && (
        <UseditemQuestionWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
        />
      )}
      {/* 대댓글 작성 인풋 */}
      {createReply === true && <UseditemReplyWrite el={props.el} />}
      <UseditemQuestionAnswerListUI />
    </>
  );
}
