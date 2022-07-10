import styled from "@emotion/styled";
import { device } from "../../../../commons/responsive/breakPoint";

export const Wrapper = styled.div`
  width: 129rem;
  min-height: 900px;
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
  width: 90rem;
  height: 15.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 10px 27px 35px;
  border-bottom: 1px solid #e5e5e5;
  &:first-child {
    border-top: 1px solid #e5e5e5;
  }
  @media ${device.laptop} {
    width: 60rem;
  }
`;

export const ItemPicture = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 10px;
`;

export const ItemInfo = styled.div`
  width: 60rem;
  display: flex;
  @media ${device.laptop} {
    width: 35rem;
  }
`;

export const ItemName = styled.span`
  margin-right: 30rem;
  @media ${device.laptop} {
    margin-right: 15rem;
  }
`;

export const ItemPrice = styled.span``;

export const CreatedAt = styled.span`
  @media ${device.tablet} {
    display: none;
  }
`;
