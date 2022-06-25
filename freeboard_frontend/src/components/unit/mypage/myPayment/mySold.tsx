import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "./myPayment.queries";
import * as MyItem from "./myPayment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Sidebar from "../../../commons/layout/sidebar";

export default function MySoldPage() {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);

  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        {data?.fetchPointTransactionsOfSelling.map((el, idx) => (
          <MyItem.ItemDiv key={idx}>
            <MyItem.ItemPicture
              src={`https://storage.googleapis.com/${el.useditem.images[0]}`}
            />
            <MyItem.ItemName>{el.useditem.name}</MyItem.ItemName>
            <MyItem.ItemPrice>{el.amount}</MyItem.ItemPrice>
            <MyItem.ItemPrice>{el.balance}</MyItem.ItemPrice>
            <MyItem.CreatedAt>{getDate(el.createdAt)}</MyItem.CreatedAt>
          </MyItem.ItemDiv>
        ))}
      </MyItem.Main>
    </MyItem.Wrapper>
  );
}
