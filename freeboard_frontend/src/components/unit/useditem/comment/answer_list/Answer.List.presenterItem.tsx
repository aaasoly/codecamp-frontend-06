import { useMutation } from "@apollo/client";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import UseditemAnswerWrite from "../answer_write/Answer.Write.container";
import UseditemQuestionAnswerListUI from "./Answer.List.presenter";
import {
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./Answer.List.queries";
import * as S from "./Answer.List.styles";
import { IUseditemQuestionAnswersListItemProps } from "./Answer.List.types";

export default function UseditemQuestionAnswersListItem(
  props: IUseditemQuestionAnswersListItemProps
) {
  const loginUser = props.logindata?.fetchUserLoggedIn.email;
  const answerUser = props.AnswerEl?.user.email;

  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );

  // 문의하기 수정 상태값 설정
  const [isEdit, setIsEdit] = useState(false);

  // 답댓글 달기 상태값 설정
  const [createReply, setCreateReply] = useState(false);

  // 🔥 답댓글 삭제
  const onClickDeleteQuestionAnswer = async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: props.AnswerEl?._id,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.QuestionEl?._id },
          },
        ],
      });
      alert("삭제되었습니다");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
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
        <S.QuestionWrapper>
          <S.WrapperBody>
            <S.UserName>{props.AnswerEl?.user.name}</S.UserName>
            <S.Contents>{props.AnswerEl?.contents}</S.Contents>
            <S.CreatedAt>{getDate(props.AnswerEl?.createdAt)}</S.CreatedAt>
          </S.WrapperBody>

          <S.WrapperRight>
            {loginUser === answerUser ? (
              <S.MyQuestion>
                <S.EditButton
                  id={props.AnswerEl?._id}
                  onClick={onClickMoveToUpdate}
                >
                  수정
                </S.EditButton>
                <S.DeleteButton
                  id={props.AnswerEl?._id}
                  onClick={onClickDeleteQuestionAnswer}
                >
                  삭제
                </S.DeleteButton>
                {/* <S.EditButton onClick={onClickCreateReply}>답글</S.EditButton> */}
              </S.MyQuestion>
            ) : (
              <S.EditButton onClick={onClickCreateReply}>답글</S.EditButton>
            )}
          </S.WrapperRight>
        </S.QuestionWrapper>
      )}
      {/* 대댓글 수정 인풋 */}
      {isEdit === true && (
        <UseditemAnswerWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          AnswerEl={props.AnswerEl}
          QuestionEl={props.QuestionEl}
        />
      )}
      {/* 대댓글 작성 인풋 */}
      {createReply === true && (
        <UseditemAnswerWrite
          AnswerEl={props.AnswerEl}
          QuestionEl={props.QuestionEl}
        />
      )}
      <UseditemQuestionAnswerListUI />
    </>
  );
}
