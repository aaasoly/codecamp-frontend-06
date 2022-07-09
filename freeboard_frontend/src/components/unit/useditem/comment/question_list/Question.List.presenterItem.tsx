import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { getDate } from "../../../../../commons/libraries/utils";
import UseditemQuestionAnswerList from "../answer_list/Answer.List.container";
import UseditemQuestionWrite from "../question_write/Question.Write.container";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./Question.List.queries";
import * as S from "./Question.List.styles";
import UseditemAnswerWrite from "../answer_write/Answer.Write.container";
import { IUseditemQuestionListItemProps } from "./Question.List.types";

export default function UseditemQuestionListItem(
  props: IUseditemQuestionListItemProps
) {
  const login = props.logindata?.fetchUserLoggedIn.email;
  const question = props.el?.user.email;

  const router = useRouter();

  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  // 문의하기 수정 상태값 설정
  const [isEdit, setIsEdit] = useState(false);

  // 답댓글 달기 상태값 설정
  const [isAnswer, setIsAnswer] = useState(false);

  // 🔥 문의하기 삭제
  const onClickDeleteQuestion = async () => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: props.el?._id },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickMoveToUpdate = () => {
    setIsEdit(true);
  };

  const onClickCreateReply = () => {
    setIsAnswer(true);
  };

  return (
    <>
      {!isEdit && (
        <S.QuestionWrapper>
          <S.WrapperBody>
            <S.UserName>{props.el?.user.name}</S.UserName>
            <S.Contents>{props.el?.contents}</S.Contents>
            <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
          </S.WrapperBody>

          <S.WrapperRight>
            {login === question ? (
              <S.MyQuestion>
                <S.EditButton id={props.el?._id} onClick={onClickMoveToUpdate}>
                  수정
                </S.EditButton>
                <S.DeleteButton
                  id={props.el?._id}
                  onClick={onClickDeleteQuestion}
                >
                  삭제
                </S.DeleteButton>
              </S.MyQuestion>
            ) : (
              <S.EditButton onClick={onClickCreateReply}>답글</S.EditButton>
            )}
          </S.WrapperRight>
        </S.QuestionWrapper>
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
      {isAnswer === true && (
        <UseditemAnswerWrite el={props.el} setIsAnswer={setIsAnswer} />
      )}
      <UseditemQuestionAnswerList el={props.el} />
    </>
  );
}
