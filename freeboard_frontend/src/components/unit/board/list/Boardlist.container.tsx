import { useRouter } from "next/router";
import BoardListPageUI from "./Boardlist.presenter";

export default function BoardListPage(props) {
  const router = useRouter();

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
    //document.getElementById("bbb").value
    // event.target 이 element 의 자식 요소이면 이동 시켜줘
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  };

  return (
    <>
      <BoardListPageUI
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        data={props.data}
      />
      {/* <Pagination refetch={refetch} lastPage={lastPage} /> */}
    </>
  );
}
