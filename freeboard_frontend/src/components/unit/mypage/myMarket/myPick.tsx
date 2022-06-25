import * as MyItem from "./myMarket.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Sidebar from "../../../commons/layout/sidebar";
import { useRecoilState } from "recoil";
import { basketItemState } from "../../../../commons/store";

export default function MyPickPage() {
  const [basketItem, setBasketItem] = useRecoilState(basketItemState);

  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        {basketItem.map((el, idx) => (
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
