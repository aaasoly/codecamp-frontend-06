import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../../../commons/login/Login.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";
import UseditemQuestionAnswersListUI from "./Answer.List.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./Answer.List.queries";
import { IUseditemQuestionAnswerListProps } from "./Answer.List.types";

export default function UseditemQuestionAnswerList(
  props: IUseditemQuestionAnswerListProps
) {
  // const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props.el?._id) },
  });

  // 페치퀘스쳔에서 유저 이메일 받아오기
  // 로그인된 유저랑 같으면 수정 삭제 버튼 띄우기
  const { data: logindata } = useQuery(FETCH_USER_LOGGED_IN);

  // console.log("밑에가 페치앤써 아이디");
  // console.log(props.el._id);

  // 무한 스크롤
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
      QuestionEl={props.el} // 페치 퀘스쳔에서 아이디값 넘겨주기
    />
  );
}
