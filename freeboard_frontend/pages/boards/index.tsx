import BoardListPage from "../../src/components/unit/board/list/Boardlist.container";
import Pagination from "../../src/components/unit/board/pagination/Pagination";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_COUNT,
} from "../../src/components/unit/board/list/Boardlist.queries";
import { useQuery } from "@apollo/client";

export default function BoardList() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <>
      <BoardListPage data={data} refetch={refetch} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
}
