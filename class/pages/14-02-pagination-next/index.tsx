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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 50%;
`;

export default function MapBoardPage() {
  const [startPage, setStartPage] = useState(1); // 기준이 될 페이지
  const { data, refetch } = useQuery(FETCH_BOARDS);

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    // 객체형태로 variables 넣어줌, page: Int 이기 때문에 Number()로 감싸기
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
  };

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
  };

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
      {new Array(10).fill(1).map((_, index) => (
        <span
          key={index + startPage}
          onClick={onClickPage}
          id={String(index + startPage)}
        >
          {index + startPage}
        </span>
      ))}
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
