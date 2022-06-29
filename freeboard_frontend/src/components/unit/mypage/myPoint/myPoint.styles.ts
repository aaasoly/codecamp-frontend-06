import styled from "@emotion/styled";
import { device } from "../../../../commons/responsive/breakPoint";

export const Wrapper = styled.div`
  width: 129rem;
  min-height: 90rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  @media ${device.laptop} {
    width: 700px;
  }
`;

export const Main = styled.div`
  width: 100rem;
  min-height: 900px;
  // border: 1px solid #bebebe;
  border-left: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    width: 40px;
  }
`;
