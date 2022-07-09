import styled from "@emotion/styled";
import { device } from "../../../../../commons/responsive/breakPoint";

export const Wrapper = styled.div`
  width: 40rem;
  height: 160px;
  border: 1px solid #bebebe;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px 18px;
  margin-top: 10px;
  @media ${device.tablet} {
    width: 490px;
  }
`;

export const Contents = styled.input`
  width: 100%;
  height: 110px;
  border: none;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid #bebebe;
  &:focus {
    outline: none;
  }
`;

export const WrapperBottom = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const WordCount = styled.div`
  width: 1198px;
`;

export const CreateButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: #fff;
`;
