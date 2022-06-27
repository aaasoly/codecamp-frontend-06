import { IBoardCommentListUIProps } from "./CommentList.types";
import BoardCommentListUIItem from "./CommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
import { IBoardComment } from "../../../../commons/types/generated/types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
