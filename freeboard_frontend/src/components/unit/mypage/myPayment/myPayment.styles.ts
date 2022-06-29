import styled from "@emotion/styled";
import { device } from "../../../../commons/responsive/breakPoint";

export const Wrapper = styled.div`
  width: 129rem;
  min-height: 90rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  @media ${device.laptop} {
    width: 90rem;
  }
`;

export const Main = styled.div`
  width: 100rem;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    width: 50rem;
  }
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
  @media ${device.laptop} {
    width: 60rem;
  }
`;

export const ItemPicture = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: 20px;
`;

export const ItemInfo = styled.div`
  width: 60rem;
  display: flex;
  @media ${device.laptop} {
    width: 35rem;
  }
`;

export const ItemName = styled.span``;

export const ItemPrice = styled.span``;

export const CreatedAt = styled.span`
  @media ${device.tablet} {
    display: none;
  }
`;
