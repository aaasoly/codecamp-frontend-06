import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "./myPayment.queries";
import * as MyItem from "./myPayment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Sidebar from "../../../commons/layout/sidebar";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchPointTransactionsOfBuyingArgs,
} from "../../../../commons/types/generated/types";

export default function MyBoughtPage() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactionsOfBuying">,
    IQueryFetchPointTransactionsOfBuyingArgs
  >(FETCH_POINT_TRANSACTIONS_OF_BUYING);

  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        {data?.fetchPointTransactionsOfBuying.map((el) => (
          <MyItem.ItemDiv key={uuidv4()}>
            <MyItem.ItemPicture
              src={
                el.useditem?.images?.[0]
                  ? `https://storage.googleapis.com/${el.useditem?.images?.[0]}`
                  : `/img/noimage.png`
              }
            />
            <MyItem.ItemName>{el.useditem?.name}</MyItem.ItemName>
            <MyItem.ItemPrice>{el.amount}</MyItem.ItemPrice>
            <MyItem.ItemPrice>{el.balance}</MyItem.ItemPrice>
            <MyItem.CreatedAt>{getDate(el.createdAt)}</MyItem.CreatedAt>
          </MyItem.ItemDiv>
        ))}
      </MyItem.Main>
    </MyItem.Wrapper>
  );
}
