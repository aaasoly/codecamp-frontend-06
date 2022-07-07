import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import { device } from "../../../../commons/responsive/breakPoint";

export const ItemList = styled.div`
  width: 40rem;
  height: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  margin-bottom: 40px;
  overflow: hidden;
  cursor: pointer;
  @media ${device.laptop} {
    width: 35rem;
    height: 50rem;
  }
  @media ${device.tablet} {
    width: 350px;
    height: 400px;
  }
`;

export const Top = styled.div`
  width: 100%;
  height: 32rem;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const Center = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const Name = styled.span`
  font-size: 22px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Remarks = styled.span`
  font-size: 14px;
  color: #bebebe;
`;

export const Tags = styled.span`
  font-size: 16px;
  height: 50px;
  word-break: break-all;
`;

export const Price = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-top: 1px solid #bebebe;
`;

export const Seller = styled.span`
  font-size: 14px;
  margin-right: 1.5rem;
`;

export const Picked = styled.div`
  font-size: 14px;
`;

export const PickedIcon = styled(HeartFilled)`
  margin-right: 5px;
  color: coral;
`;
