import * as S from "./UsedItem.list.styles";

export default function UsedItemListUI(props) {
  console.log("ui", props.data?.fetchUseditems);
  return (
    <S.Wrapper>
      {props.data?.fetchUseditems.map((el) => (
        <S.Row key={el._id}>
          <S.Colunm__Left>
            <S.Img></S.Img>
          </S.Colunm__Left>

          <S.Column__Center>
            <S.Name onClick={props.onClickMoveToDetail}>{el.name}</S.Name>
            <S.Remarks>{el.remarks}</S.Remarks>
            <S.Tags>{el.tags}</S.Tags>

            <S.Column__Bottom>
              <S.Seller>{el.seller}</S.Seller>
              <S.Picked>{el.pickedCount}</S.Picked>
            </S.Column__Bottom>
          </S.Column__Center>

          <S.Column__Right>
            <S.Price>가격 : {el.price}</S.Price>
          </S.Column__Right>
        </S.Row>
      ))}
      {props.data?.fetchUseditems.contents}
    </S.Wrapper>
  );
}
