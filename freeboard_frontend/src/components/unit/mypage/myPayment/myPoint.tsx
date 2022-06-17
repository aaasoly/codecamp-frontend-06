import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS } from "./myPayment.queries";
import * as MyItem from "./myPayment.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function MyPointPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);
  console.log(data);

  return (
    <MyItem.Wrapper>
      {data?.fetchPointTransactions.map((el, idx) => (
        <MyItem.ItemDiv key={idx}>
          <MyItem.ItemPrice>{el.status}</MyItem.ItemPrice>
          <MyItem.ItemPrice>{el.amount}</MyItem.ItemPrice>
          <MyItem.ItemPrice>{el.balance}</MyItem.ItemPrice>
          <MyItem.CreatedAt>{getDate(el.createdAt)}</MyItem.CreatedAt>
        </MyItem.ItemDiv>
      ))}
    </MyItem.Wrapper>
  );
}
