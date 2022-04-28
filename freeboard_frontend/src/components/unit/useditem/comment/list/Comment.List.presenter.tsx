import InfiniteScroll from "react-infinite-scroller";
import UseditemQuestionListItem from "./Comment.List.presenterItem";

export default function UseditemQuestionListUI(props) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <UseditemQuestionListItem
            key={el._id}
            el={el}
            logindata={props.logindata}
          />
        ))}
      </InfiniteScroll>
    </>
  );
}
