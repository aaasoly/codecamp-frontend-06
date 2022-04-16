import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import BoardListPageUI from "./Boardlist.presenter";
import _ from "lodash";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Boardlist.queries";

export default function BoardListPage() {
  const [keyword, setKeyword] = useState("");
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount, refetch: refetchBoardsCount } =
    useQuery(FETCH_BOARDS_COUNT);

  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    // document.getElementById("bbb").value
    // event.target 이 element 의 자식 요소이면 이동 시켜줘
    // router.push(
    //   {
    //     pathname: `/boards/?${event.currentTarget.id}`,
    //     // query: { ...values, page: 1 }
    //   },
    //   undefined,
    //   { shallow: true }
    // );
    if (event.currentTarget instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  const getDebounce = _.debounce((data: string) => {
    // 다른 페이지를 보고 있어도 검색하면 1페이지로 돌아와야하기 때문에 page: 1
    refetch({ search: data, page: 1 });
    // 검색 결과를 위한 페이지 처리
    refetchBoardsCount({ search: data });

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
