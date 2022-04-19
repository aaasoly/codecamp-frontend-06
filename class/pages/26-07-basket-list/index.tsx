import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MyBasketPage() {
  const [basketItems, setBasketItems] = useState([]);

  // 프론트엔드 서버에는 localStorage가 없기 때문에 프리렌더링 과정에서 문제가 생길 수 있다
  // 따라서 모든 페이지가 마운트 된 다음에 실행될 수 있도록 useEffect 안에 넣어주자
  // if(typeof window !== "undefined") 조건 걸어줘도 되지만 too much rendering 오류가 뜰 수 있다
  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItems(baskets);
  }, []); // useEffect는 didMount 시점이기 때문에 한 번만 실행된다.

  return (
    <div>
      {basketItems.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
