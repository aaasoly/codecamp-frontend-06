import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/Comment.List.queries";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "../reply_list/Reply.List.queries";
import UseditemQuestionWriteUI from "./Reply.Write.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USED_ITEM_QUESTION_ANSWER,
} from "./Reply.Write.queries";

export default function UseditemReplyWrite(props) {
  const router = useRouter();
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USED_ITEM_QUESTION_ANSWER
  );
  // const { data } = useQuery(FETCH_USED_ITEMS_QUESTION_ANSWERS);
  // const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS);

  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  console.log(props.el._id);
  // console.log(data);

  // ✏️ 답글 등록
  const onClickCreateAnswer = async () => {
    try {
      const result = await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEMS_QUESTION_ANSWERS,
            variables: { useditemQuestionId: String(router.query.useditemId) },
          },
        ],
      });
      alert("답글이 등록되었습니다.");
      console.log(result);
      setContents("");
    } catch (error) {
      alert(error.message);
    }
  };

  // ✏️ 답댓 업데이트
  const onClickUpdateAnswer = async () => {
    try {
      // if (!props.el?._id) return;

      const updateUseditemQuestionAnswerInput = {};
      if (contents !== "")
        updateUseditemQuestionAnswerInput.contents = contents;

      const result = await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput,
          useditemQuestionId: props.el._id,
        },
        // refetchQueries: [
        //   {
        //     query:
        //     variables: {  },
        //   },
        // ],
      });
      props.setIsEdit?.(false);
      alert("수정이 완료되었습니다.");
      console.log(result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UseditemQuestionWriteUI
      onChangeContents={onChangeContents}
      onClickCreateAnswer={onClickCreateAnswer}
      onClickUpdateAnswer={onClickUpdateAnswer}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}
