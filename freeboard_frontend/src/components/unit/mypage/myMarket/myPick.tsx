import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS_I_PICKED } from "./myMarket.queries";
import * as MyItem from "./myMarket.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Sidebar from "../../../commons/layout/sidebar";

export default function MyPickPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  console.log(data);

  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        {data?.fetchUseditemsIPicked.map((el, idx) => (
          <MyItem.ItemDiv key={idx}>
            <MyItem.ItemPicture
              src={`https://storage.googleapis.com/${el.images[0]}`}
            />
            <MyItem.ItemInfo>
              <MyItem.ItemName>{el.name}</MyItem.ItemName>
              <MyItem.ItemPrice>{el.price}</MyItem.ItemPrice>
            </MyItem.ItemInfo>
            <MyItem.CreatedAt>{getDate(el.createdAt)}</MyItem.CreatedAt>
          </MyItem.ItemDiv>
        ))}
      </MyItem.Main>
    </MyItem.Wrapper>
  );
}
