import styled from "@emotion/styled";
import { device } from "../../../../../commons/responsive/breakPoint";

export const Wrapper = styled.div`
  width: 41.5rem;
  height: 160px;
  border: 1px solid #bebebe;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 10px 18px;
  font-size: 14px;
  margin-bottom: 15px;
  @media ${device.tablet} {
    width: 510px;
  }
`;

export const Contents = styled.textarea`
  width: 100%;
  height: 110px;
  border: none;
  border-radius: 15px 15px 0 0;
  border-bottom: 1px solid #bebebe;
  resize: none;
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

export const WordCount = styled.div``;

export const CreateButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-color: #fff;
  border: 1px solid #bebebe;
`;
