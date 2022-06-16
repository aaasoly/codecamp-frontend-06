import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemDiv = styled.div`
  width: 840px;
  height: 154px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 10px 27px 35px;
  /* border-top: 1px solid #bebebe; */
  border-bottom: 1px solid #bebebe;
`;

export const ItemPicture = styled.img`
  width: 100px;
  height: 100px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.span``;

export const ItemPrice = styled.span``;

export const CreatedAt = styled.span``;
