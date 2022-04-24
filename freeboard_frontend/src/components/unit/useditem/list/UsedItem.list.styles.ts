import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 1350px;
  display: flex;
`;

export const Row = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  border-top: 1px solid #bdbdbd;
  padding: 28px 0;
  /* flex-direction: column; */
`;

export const Colunm__Left = styled.div`
  width: 160px;
  height: 100%;
  margin-right: 40px;
`;

export const Column__Center = styled.div`
  width: 870px;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: space-around; */
`;

export const Column__Right = styled.div`
  width: 170px;
  height: 100%;
  padding: 62px 0;
  /* display: flex;
  justify-content: center; */
`;

export const Img = styled.img`
  width: 160px;
  height: 160px;
`;

export const Name = styled.div`
  font-size: 20px;
  margin-bottom: 4px;
`;

export const Remarks = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Tags = styled.div`
  font-size: 16px;
  color: #bdbdbd;
  /* margin-bottom: 24px; */
`;

export const Seller = styled.div`
  margin-right: 15px;
`;

export const Picked = styled.div``;

export const PickedIcon = styled(HeartFilled)`
  margin-right: 5px;
  color: coral;
`;

export const Price = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

export const Column__Bottom = styled.div`
  display: flex;
  flex-direction: row;
  height: 24px;
  margin-top: 24px;
`;
