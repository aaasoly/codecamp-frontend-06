import * as S from "./UsedItem.list.styles";

export default function UsedItemListUIItem(props) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.Colunm__Left>
          <S.Img
            src={
              props.el.images[0]
                ? `https://storage.googleapis.com/${props.el.images?.[0]}`
                : `/img/1.jpg`
            }
            onClick={props.onClickMoveToDetail}
          ></S.Img>
        </S.Colunm__Left>

        <S.Column__Center>
          <S.Name id={props.el._id} onClick={props.onClickMoveToDetail}>
            {props.el.name}
          </S.Name>
          <S.Remarks> {props.el.remarks}</S.Remarks>
          <S.Tags>{props.el.tags}</S.Tags>

          <S.Column__Bottom>
            <S.Seller> {props.el.seller.name}</S.Seller>
            <S.Picked>
              <S.PickedIcon />
              {props.el.pickedCount}
            </S.Picked>
          </S.Column__Bottom>
        </S.Column__Center>

        <S.Column__Right>
          <S.Price>₩ {props.el.price}</S.Price>
        </S.Column__Right>
      </S.Row>
    </S.Wrapper>
  );
}
