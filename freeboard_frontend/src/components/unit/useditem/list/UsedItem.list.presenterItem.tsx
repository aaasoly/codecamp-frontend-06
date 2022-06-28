import * as S from "./UsedItem.list.styles";
import { IUsedItemListUIItemProps } from "./Useditem.list.types";

export default function UsedItemListUIItem(props: IUsedItemListUIItemProps) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColunmLeft>
          <S.Img
            src={
              props.el?.images?.[0]
                ? `https://storage.googleapis.com/${props.el.images?.[0]}`
                : `/img/1.jpg`
            }
            onClick={props.onClickMoveToDetail}
          ></S.Img>
        </S.ColunmLeft>

        <S.ColumnCenter>
          <S.Name id={props.el._id} onClick={props.onClickMoveToDetail}>
            {props.el.name}
          </S.Name>
          <S.Remarks> {props.el.remarks}</S.Remarks>
          <S.Tags>{props.el.tags}</S.Tags>

          <S.ColumnBottom>
            <S.Seller> {props.el?.seller?.name}</S.Seller>
            <S.Picked>
              <S.PickedIcon />
              {props.el.pickedCount}
            </S.Picked>
          </S.ColumnBottom>
        </S.ColumnCenter>

        <S.ColumnRight>
          <S.Price> {props.el.price} 원</S.Price>
        </S.ColumnRight>
      </S.Row>
    </S.Wrapper>
  );
}
