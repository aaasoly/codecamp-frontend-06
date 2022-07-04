import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import { device } from "../../../../commons/responsive/breakPoint";

// export const Wrapper = styled.div`
//   width: 140rem;
//   display: flex;
//   flex-wrap: wrap;
//   @media ${device.laptop} {
//     width: 90rem;
//   }
//   @media ${device.tablet} {
//     width: 500px;
//   }
// `;

export const ItemList = styled.div`
  width: 42rem;
  height: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
  overflow: hidden;
  @media ${device.tablet} {
    width: 300px;
    height: 500px;
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
  font-size: 2.2rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${device.tablet} {
    font-size: 10px;
  }
`;

export const Remarks = styled.span`
  font-size: 1.4rem;
  color: #bebebe;
`;

export const Tags = styled.span`
  font-size: 1.6rem;
  height: 50px;
`;

export const Price = styled.span`
  font-size: 2.2rem;
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
