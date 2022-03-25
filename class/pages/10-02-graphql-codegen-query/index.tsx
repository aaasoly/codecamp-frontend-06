import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { number: 83011 }, // IQueryFetchBoardArgs 가 타입을 체크해 줌
    }
  ); // 중괄호!! useState랑 헷갈리지 말기

  // 페치보드를 두 개 만들어 줄 경우 data 이름 중복 선언이 불가능 하기 때문에 어떻게 선언할지 생각해보자
  // data2 vs data: dataBoardComment ... 뭐가 더 좋은 방법?
  // const { data: dataBoardComment } = useQuery<Pick<IQuery, 'fetchBoardComment'>, IQueryFetchBoardArgs>(FETCH_BOARD_COMMENT, {
  //   variables: { number: 83011 } // IQueryFetchBoardArgs 가 타입을 체크해 줌
  // })

  console.log(data);

  return (
    <div>
      <div>{data?.fetchBoard?.number}번 게시글에 오신 것을 환영합니다!!!</div>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
    </div>

    // optional-chaining : data&&data.fetchBoard.number = data?.fetchBoard.number
  );
}
