import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_USED_ITEM_QUESTION } from "./Question.Write.queries";

export default function UseditemQuestionWrite() {
  const router = useRouter()
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onClickCreateQuestion = async () => {
    try {
      await createUseditemQuestion({
        variables: {
          contents,
        },
        useditemId: String(router.query.useditemId)
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (

  )
}
