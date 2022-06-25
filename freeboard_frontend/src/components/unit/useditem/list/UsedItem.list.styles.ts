import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import { device } from "../../../../commons/responsive/breakPoint";

export const Wrapper = styled.div`
  width: 135rem;
  display: flex;
  @media ${device.laptop} {
    width: 90rem;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;

export const Colunm__Left = styled.div`
  width: 16rem;
  height: 16rem;
`;

export const Column__Center = styled.div`
  width: 93rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.laptop} {
    width: 700px;
  }
  @media ${device.tablet} {
    width: 330px;
  }
`;

export const Column__Right = styled.div`
  width: 17rem;
  height: 16rem;
  padding: 6.2rem 0;
`;

export const Img = styled.img`
  width: 16rem;
  height: 16rem;
  border-radius: 1rem;
`;

export const Name = styled.span`
  font-size: 2rem;
  font-weight: 600;
  @media ${device.tablet} {
    font-size: 10px;
  }
`;

export const Remarks = styled.span`
  font-size: 1.4rem;
`;

export const Tags = styled.span`
  font-size: 1.6rem;
  color: #bdbdbd;
`;

export const Seller = styled.span`
  font-size: 1.4rem;
  margin-right: 1.5rem;
`;

export const Picked = styled.div`
  font-size: 1.4rem;
`;

export const PickedIcon = styled(HeartFilled)`
  margin-right: 5px;
  color: coral;
`;

export const Price = styled.span`
  font-size: 2.2rem;
  font-weight: 600;
`;

export const Column__Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 2.4rem;
`;
