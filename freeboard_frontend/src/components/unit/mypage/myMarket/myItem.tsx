import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS_I_SOLD } from "./myMarket.queries";
import * as MyItem from "./myMarket.styles";
import { getDate } from "../../../../commons/libraries/utils";

export default function MyItemPage() {
  const { data } = useQuery(FETCH_USED_ITEMS_I_SOLD);

  console.log(data);
  return (
    <MyItem.Wrapper>
      {data?.fetchUseditemsISold.map((el, idx) => (
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
    </MyItem.Wrapper>
  );
}