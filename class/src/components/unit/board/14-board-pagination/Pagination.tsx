import { useState } from "react";

export default function Pagination(props) {
  const [startPage, setStartPage] = useState(1); // 기준이 될 페이지

  const onClickPage = (event) => {
    props.refetch({ page: Number(event.target.id) });
    // 객체형태로 variables 넣어줌, page: Int 이기 때문에 Number()로 감싸기
  };

  const onClickPrevPage = (event) => {
    if (startPage === 1) return; // 시작 페이지가 1일 때 이전페이지 작동 안 되게 만들기
    setStartPage((prev) => prev - 10);
    props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = (event) => {
    if (startPage + 10 > props.lastPage) return; // if(!(startPage + 10 <= lastPage)) return 와 같은 말
    setStartPage((prev) => prev + 10);
    props.refetch({ page: startPage + 10 });
  };

  return (
    <div>
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= props.lastPage ? ( // 삼항 연산자로 index + startPage <= lastPage (조건식) 이 참일 때(?) 페이지 숫자 보여주고 거짓일 때(:) 빈 값
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
    </div>
  );
}
