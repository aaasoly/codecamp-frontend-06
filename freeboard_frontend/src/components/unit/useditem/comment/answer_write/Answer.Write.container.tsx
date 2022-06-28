import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../answer_list/Answer.List.queries";
import UseditemQuestionAnswerWriteUI from "./Answer.Write.presenter";

import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./Answer.Write.queries";
import { IUseditemAnswerWriteProps } from "./Answer.Write.types";

export default function UseditemAnswerWrite(props: IUseditemAnswerWriteProps) {
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );

  const [reply, setReply] = useState("");

  const onChangeReply = (event: ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  // ✏️ 답글 등록
  const onClickCreateAnswer = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents: reply },
          useditemQuestionId: props.el?._id, // props.QuestionEl._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.el?._id }, // props.QuestionEl._id,
          },
        ],
      });
      alert("답글이 등록되었습니다.");
      console.log(result);
      setReply("");
      props.setIsAnswer?.(false);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // ✏️ 답댓 업데이트
  const onClickUpdateAnswer = async () => {
    try {
      if (!props.AnswerEl?._id) return;

      // const updateUseditemQuestionAnswerInput = {};
      // if (contents !== "")
      //   updateUseditemQuestionAnswerInput.contents = contents;

      const result = await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: reply },
          useditemQuestionAnswerId: props.AnswerEl._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.QuestionEl?._id },
          },
        ],
      });
      props.setIsEdit?.(false);
      alert("수정이 완료되었습니다.");
      console.log(result);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <UseditemQuestionAnswerWriteUI
      onChangeReply={onChangeReply}
      onClickCreateAnswer={onClickCreateAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
      reply={reply}
      el={props.el}
      isEdit={props.isEdit}
      AnswerEl={props.AnswerEl}
    />
  );
}
