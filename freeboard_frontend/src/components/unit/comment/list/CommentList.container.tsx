import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQueryFetchBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";

export default function BoardCommentList() {
  // FETCH_COMMENTS Comments list
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id + "님이 작성한 글입니다");
    // 이벤트가 있는 태그에 id값을 설정
    // 어떤 자식 태그를 클릭하더라도 상위에 있는 onClick 이벤트 실행
  };

  return <BoardCommentListUI data={data} onClickWriter={onClickWriter} />;
}
