import * as MyItem from "./myMarket.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Sidebar from "../../../commons/layout/sidebar";
import { useRecoilState } from "recoil";
import { basketItemState } from "../../../../commons/store";
import { useEffect } from "react";

export default function MyPickPage() {
  const [basketItem, setBasketItem] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItem(baskets);
  }, []);

  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        {basketItem.map((el: any) => (
          <MyItem.ItemDiv key={el._id}>
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
