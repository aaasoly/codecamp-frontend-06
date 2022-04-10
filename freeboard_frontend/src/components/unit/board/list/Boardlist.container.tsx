import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardListPageUI from "./Boardlist.presenter";
import _ from "lodash";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Boardlist.queries";

export default function BoardListPage() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);

  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    // document.getElementById("bbb").value
    // event.target 이 element 의 자식 요소이면 이동 시켜줘
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
    console.log(`/boards/${event.target.id}`);
  };

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 2000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <>
      <BoardListPageUI
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        data={data}
        refetch={refetch}
        count={dataBoardsCount?.fetchBoardsCount}
        keyword={keyword}
        onChangeSearch={onChangeSearch}
      />
      {/* <Pagination refetch={refetch} lastPage={lastPage} /> */}
    </>
  );
}
