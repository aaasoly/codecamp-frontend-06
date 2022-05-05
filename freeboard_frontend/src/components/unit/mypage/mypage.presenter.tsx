import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import PaymentLoading from "../../../commons/loading";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/Login.queries";
import { basketItemState } from "../../../commons/store";
import styled from "@emotion/styled";

const BasketBox = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: aliceblue;
`;

const Colunm = styled.div`
  width: 250px;
  height: 40px;
`;

export default function MyPageUI() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [basketItem, setBasketItem] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItem(baskets);
  }, []);

  console.log(basketItem);

  return (
    <div>
      <PaymentLoading />
      <div>충전된 포인트: {data?.fetchUserLoggedIn.userPoint.amount}</div>

      <BasketBox>
        {basketItem.map((el, idx) => (
          <div key={idx}>
            <Colunm>{el.name}</Colunm>
            <Colunm>{el.price}</Colunm>
            <Colunm>{el.seller.name}</Colunm>
          </div>
        ))}
      </BasketBox>
    </div>
  );
}
