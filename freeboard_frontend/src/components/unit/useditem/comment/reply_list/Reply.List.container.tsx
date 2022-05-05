import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../../../commons/login/Login.queries";
import UseditemQuestionAnswersListUI from "./Reply.List.presenter";
import { FETCH_USED_ITEMS_QUESTION_ANSWERS } from "./Reply.List.queries";

export default function UseditemQuestionAnswerList(props) {
  // const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.el._id },
  });

  // 페치퀘스쳔에서 유저 이메일 받아오기
  // 로그인된 유저랑 같으면 수정 삭제 버튼 띄우기
  const { data: logindata } = useQuery(FETCH_USER_LOGGED_IN);

  console.log("앤써" + data);
  console.log(props.el._id);
  // console.log(logindata);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestionAnswers)
          return {
            fetchUseditemQuestionAnswers: [
              ...prev.fetchUseditemQuestionAnswers,
            ],
          };

        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  return (
    <UseditemQuestionAnswersListUI
      data={data}
      onLoadMore={onLoadMore}
      logindata={logindata}
    />
  );
}
