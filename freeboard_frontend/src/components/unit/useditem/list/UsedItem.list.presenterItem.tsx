import * as S from "./UsedItem.list.styles";
import { IUsedItemListUIItemProps } from "./Useditem.list.types";

export default function UsedItemListUIItem(props: IUsedItemListUIItemProps) {
  return (
    <S.ItemList id={props.el._id} onClick={props.onClickMoveToDetail}>
      <S.Top>
        <S.Img
          src={
            props.el?.images?.[0]
              ? `https://storage.googleapis.com/${props.el.images?.[0]}`
              : `/img/1.jpg`
          }
        />
      </S.Top>

      <S.Center>
        <S.Name>{props.el.name}</S.Name>
        <S.Remarks> {props.el.remarks}</S.Remarks>
        <S.Price> {props.el.price} 원</S.Price>
        <S.Tags>{props.el.tags}</S.Tags>
      </S.Center>

      <S.Bottom>
        <S.Seller> {props.el?.seller?.name}</S.Seller>
        <S.Picked>
          <S.PickedIcon />
          {props.el.pickedCount}
        </S.Picked>
      </S.Bottom>
    </S.ItemList>
  );
}
