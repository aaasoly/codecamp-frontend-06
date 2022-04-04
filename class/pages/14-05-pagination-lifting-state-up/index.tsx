import Board from "../../src/components/unit/board/14-board-pagination/Board";
import Pagination from "../../src/components/unit/board/14-board-pagination/Pagination";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function MapBoardPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  return (
    <div>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
      {/* 언제든 재사용이 가능한 pagination이 됨
          refetch를 가져오는 query만 바꿔주면 된다 ex. fetchProduct */}
    </div>
  );
}
