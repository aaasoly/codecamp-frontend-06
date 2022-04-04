import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./Boardetail.queries";
import BoardDetailUI from "./Boardetail.presenter";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IMutationDislikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardDetail() {
  // FETCH_BOARD
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  ); // 백엔드에 데이터를 요청해서 받아온 것을 data 변수에 저장, 받아오기 전까지 data=undefined
  console.log(data);

  // LIKE_BOARD
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const onClickLike = () => {
    const result = likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
    console.log(result);
  };

  // DISLIKE_BOARD
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  const onClickDislike = () => {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  };

  // DELETE_BOARD
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId },
      });
      Modal.success({
        content: "게시물 등록에 성공하였습니다!",
      });
      router.push("/boards/list");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMovetoUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <BoardDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMovetoUpdate={onClickMovetoUpdate}
      onClickMovetoBoardList={onClickMoveToBoardList}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
