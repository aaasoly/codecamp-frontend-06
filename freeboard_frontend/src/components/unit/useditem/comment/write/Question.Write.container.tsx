import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USED_ITEM_QUESTIONS } from "../list/Comment.List.queries";
import UseditemQuestionWriteUI from "./Question.Write.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./Question.Write.queries";

export default function UseditemQuestionWrite() {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

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
            variables: { useditemId: String(router.query.usdeitemId) },
          },
        ],
      });
      alert("댓글이 등록되었습니다.");
      setContents("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UseditemQuestionWriteUI
      onChangeContents={onChangeContents}
      onClickCreateQuestion={onClickCreateQuestion}
    />
  );
}