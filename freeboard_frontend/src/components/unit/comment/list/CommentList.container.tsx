import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import {
  IQueryFetchBoardArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import BoardCommentListUI from "./CommentList.presenter";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { Modal } from "antd";

export default function BoardCommentList() {
  // FETCH_COMMENTS Comments list
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  const onClickWriter = (event: MouseEvent<HTMLDivElement>) => {
    Modal.success({
      content: event.currentTarget.id + "님이 작성한 글입니다.",
    });
    // 이벤트가 있는 태그에 id값을 설정
    // 어떤 자식 태그를 클릭하더라도 상위에 있는 onClick 이벤트 실행
  };

  // infinite scrolling
  const onLoadMore = () => {
    if (!data) return; // 처음엔 data가 존재하지 않기 때문에 return 요청

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoardComments)
          // 더 받아올 데이터가 없을 때
          return { fetchBoardComments: [...prev.fetchBoardComments] }; // 이전 prev 에 저장된 데이터 불러옴

        return {
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  return (
    <BoardCommentListUI
      data={data}
      onClickWriter={onClickWriter}
      onLoadMore={onLoadMore}
    />
  );
}
