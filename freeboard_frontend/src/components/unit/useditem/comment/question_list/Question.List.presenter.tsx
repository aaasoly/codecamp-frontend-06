import InfiniteScroll from "react-infinite-scroller";
import UseditemQuestionListItem from "./Question.List.presenterItem";
import { IUseditemQuestionListUIProps } from "./Question.List.types";

export default function UseditemQuestionListUI(
  props: IUseditemQuestionListUIProps
) {
  return (
    <div style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <UseditemQuestionListItem
            key={el._id}
            el={el}
            logindata={props.logindata}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
