// 상세 페이지

import BoardDetail from "../../../src/components/unit/board/detail/Boardetail.container";
import BoardCommentWrite from "../../../src/components/unit/comment/write/BoardComment.container";
import BoardCommentList from "../../../src/components/unit/comment/list/CommentList.container";

export default function BoardDetailPage() {
  return (
    <div>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </div>
  );
}
