import InfiniteScroll from "react-infinite-scroller";
import UseditemQuestionAnswersListItem from "./Reply.List.presenterItem";

export default function UseditemQuestionAnswersListUI(props) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestionAnswers.map((el) => (
          <UseditemQuestionAnswersListItem
            key={el._id}
            el={el}
            logindata={props.logindata}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
