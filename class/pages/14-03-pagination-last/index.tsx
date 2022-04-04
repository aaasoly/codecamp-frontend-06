import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 50%;
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1); // 기준이 될 페이지
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT); // data 이름 바꿔주기
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10); // lastpage = 글 개수 / 10 한 값을 올려준다
  // 처음엔 data의 값이 undefined 이기 때문에 ? 해줘야함

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    // 객체형태로 variables 넣어줌, page: Int 이기 때문에 Number()로 감싸기
  };

  const onClickPrevPage = (event) => {
    if (startPage === 1) return; // 시작 페이지가 1일 때 이전페이지 작동 안 되게 만들기
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (event) => {
    if (startPage + 10 > lastPage) return; // if(!(startPage + 10 <= lastPage)) return 와 같은 말
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };
  // startPage는 항상 마지막 페이지보다 작거나 같아야 한다.
  // 반대의 경우에는 바로 return

  return (
    <div>
      {/* index 매개 변수 : 게시글이 쓰인 순서 */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {/* 쓰지 않는 건 _ 처리 해줌(관례) */}
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? ( // 삼항 연산자로 index + startPage <= lastPage (조건식) 이 참일 때(?) 페이지 숫자 보여주고 거짓일 때(:) 빈 값
          // index + startPage <= lastPage && 로 써줘도 됨!
          <span
            key={index + startPage}
            onClick={onClickPage}
            id={String(index + startPage)}
          >
            {` `}
            {index + startPage}
          </span>
        ) : (
          <span></span>
        )
      )}
      <span onClick={onClickNextPage}>다음 페이지</span>
      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} onClick={onClickPage} id={String(el)}>
          {el}
        </span>
      ))} */}
      {/* <span onClick={onClickPage} id="1">
        1
      </span>
      <span onClick={onClickPage} id="2">
        2
      </span>
      <span onClick={onClickPage} id="3">
        3
      </span> */}
    </div>
  );
}
