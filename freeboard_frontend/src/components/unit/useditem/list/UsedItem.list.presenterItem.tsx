import * as S from "./UsedItem.list.styles";

export default function UsedItemListUIItem(props) {
  return (
    <S.Wrapper>
      {props.data?.fetchUseditems.map((el) => (
        <S.Row key={el._id}>
          <S.Colunm__Left>
            <S.Img></S.Img>
          </S.Colunm__Left>

          <S.Column__Center>
            <S.Name id={el._id} onClick={props.onClickMoveToDetail}>
              {el.name}
            </S.Name>
            <S.Remarks> {el.remarks}</S.Remarks>
            <S.Tags>{el.tags}</S.Tags>

            <S.Column__Bottom>
              <S.Seller> {el.seller.name}</S.Seller>
              <S.Picked> {el.pickedCount}</S.Picked>
            </S.Column__Bottom>
          </S.Column__Center>

          <S.Column__Right>
            <S.Price>₩ {el.price}</S.Price>
          </S.Column__Right>
        </S.Row>
      ))}
    </S.Wrapper>
  );
}
