import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
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
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  // button 을 클릭했을 때 html 쪽 el이 넘어옴. 매개변수이기 때문에 이름은 아무거나 상관X
  const onClickBasket = (el) => () => {
    console.log(el);

    // 1. 기존 장바구니 가져오기
    // 데이터를 먼저 가져와서 새로 담은 데이터를 push || 불러올 데이터가 없다면 [] 출력
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 중복값 확인하기
    // const temp : 임시로 데이터를 담아놓는 변수 네이밍
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      // 중복되는 값이 있을 때
      alert("이미 담으신 상품입니다.");
      return; // 함수 종료  **break 는 for문을 종료할 때, 함수 종료는 return
    }

    // 방금 선택한 것과 다른 것들만 filter로 걸러주기
    // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id)
    // newBaskets 를 아래에서 담아주면 중복돼서 담긴 아이템 삭제

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    // localStorage에는 텍스트만 들어갈 수 있기때문에 el을 텍스트로 바꿔주어야 한다.
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니 담기</button>
        </MyRow>
      ))}
    </div>
  );
}
