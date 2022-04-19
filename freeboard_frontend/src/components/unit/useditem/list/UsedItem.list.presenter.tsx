import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  height: 800px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 200px;
  height: 100px;
`;

export default function UsedItemListUI(props) {
  console.log("ui", props.data?.fetchUseditems);
  return (
    <Wrapper>
      {props.data?.fetchUseditems.map((el) => (
        <Row key={el._id}>
          <Column onClick={props.onClickMoveToDetail}>{el.title}</Column>
          <Column>한줄 : {el.remarks}</Column>
          <Column>상품명 : {el.name}</Column>
          <Column>테그 : {el.tags}</Column>
          <Column>가격 : {el.price}</Column>
        </Row>
      ))}
      {props.data?.fetchUseditems.contents}
    </Wrapper>
  );
}
