import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../../../commons/login/Login.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import UseditemQuestionListUI from "./Question.List.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./Question.List.queries";

export default function UseditemQuestionList() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  // 페치퀘스쳔에서 유저 이메일 받아오기
  // 로그인된 유저랑 같으면 수정 삭제 버튼 띄우기
  const { data: logindata } = useQuery(FETCH_USER_LOGGED_IN);

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

  return (
    <UseditemQuestionListUI
      data={data}
      onLoadMore={onLoadMore}
      logindata={logindata}
    />
  );
}
