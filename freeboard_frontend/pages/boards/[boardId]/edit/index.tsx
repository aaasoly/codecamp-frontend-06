// 게시글 수정하기 페이지
import BoardWrite from "../../../../src/components/unit/board/write/Boardwrite.container";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

// 내가 변경한 스테이트만 수정하기 위해 불러옴
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
      youtubeUrl
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export default function BoardUpdatePage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  }); // 백엔드에 데이터를 요청해서 받아온 것을 data 변수에 저장, 받아오기 전까지 data=undefined

  // 컨테이너컴포넌트에 전달
  return <BoardWrite isEdit={true} data={data} />;
}
