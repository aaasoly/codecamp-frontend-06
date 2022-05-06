import InfiniteScroll from "react-infinite-scroller";
import UseditemQuestionAnswersListItem from "./Answer.List.presenterItem";

export default function UseditemQuestionAnswersListUI(props) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestionAnswers.map((AnswerEl) => (
          <UseditemQuestionAnswersListItem
            key={AnswerEl._id}
            AnswerEl={AnswerEl}
            logindata={props.logindata}
            QuestionEl={props.QuestionEl}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
