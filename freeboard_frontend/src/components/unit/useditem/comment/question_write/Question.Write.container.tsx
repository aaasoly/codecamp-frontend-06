import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../question_list/Question.List.queries";
import UseditemQuestionWriteUI from "./Question.Write.presenter";
import {
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
} from "./Question.Write.queries";

export default function UseditemQuestionWrite(props) {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  // ✏️ 문의하기 등록
  const onClickCreateQuestion = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      alert("댓글이 등록되었습니다.");
      setContents("");
    } catch (error) {
      alert(error.message);
    }
  };

  // ✏️ 문의하기 업데이트
  const onClickUpdateQuestion = async () => {
    try {
      if (!props.el?._id) return;

      const updateUseditemQuestionInput = {};
      if (contents !== "") updateUseditemQuestionInput.contents = contents;

      const result = await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput,
          useditemQuestionId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
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
      onClickCreateQuestion={onClickCreateQuestion}
      onClickUpdateQuestion={onClickUpdateQuestion}
      contents={contents}
      el={props.el}
      isEdit={props.isEdit}
    />
  );
}
