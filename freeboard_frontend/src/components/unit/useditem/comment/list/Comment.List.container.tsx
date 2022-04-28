import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../../../commons/login/Login.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import UseditemQuestionListUI from "./Comment.List.presenter";
import {
  DELETE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
  UPDATE_USED_ITEM_QUESTIONS,
} from "./Comment.List.queries";

export default function UseditemQuestionList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  // const [updateUseditemQuestions] = useMutation(UPDATE_USED_ITEM_QUESTIONS);
  // const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  // 페치퀘스쳔에서 유저 이메일 받아오기
  // 로그인된 유저랑 같으면 수정 삭제 버튼 띄우기
  const { data: logindata } = useQuery(FETCH_USER_LOGGED_IN);

  // console.log(logindata);
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return { fetchUseditemQuestions: [...prev.fetchUseditemQuestions] };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  // 수정하기

  // 삭제하기

  return (
    <UseditemQuestionListUI
      data={data}
      onLoadMore={onLoadMore}
      logindata={logindata}
    />
  );
}
