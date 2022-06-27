import { useQuery } from "@apollo/client";
import { FETCH_POINT_TRANSACTIONS } from "./myPayment.queries";
import * as MyItem from "./myPayment.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Sidebar from "../../../commons/layout/sidebar";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";

export default function MyPointPage() {
  const { data } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS);

  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        {data?.fetchPointTransactions.map((el) => (
          <MyItem.ItemDiv key={uuidv4()}>
            <MyItem.ItemPrice>{el.status}</MyItem.ItemPrice>
            <MyItem.ItemPrice>{el.amount}</MyItem.ItemPrice>
            <MyItem.ItemPrice>{el.balance}</MyItem.ItemPrice>
            <MyItem.CreatedAt>{getDate(el.createdAt)}</MyItem.CreatedAt>
          </MyItem.ItemDiv>
        ))}
      </MyItem.Main>
    </MyItem.Wrapper>
  );
}
