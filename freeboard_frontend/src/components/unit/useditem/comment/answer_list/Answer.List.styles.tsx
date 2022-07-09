import styled from "@emotion/styled";
import { device } from "../../../../../commons/responsive/breakPoint";

export const QuestionWrapper = styled.div`
  width: 40rem;
  height: auto;
  display: flex;
  border-bottom: 1px solid #bebebe;
  margin-top: 20px;
  margin-left: 20px;
  padding-bottom: 20px;
  @media ${device.tablet} {
    width: 430px;
  }
`;

export const WrapperBody = styled.div`
  width: 40rem;
  height: auto;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: 400px;
  }
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;
export const Contents = styled.span`
  font-size: 14px;
  height: auto;
  margin-bottom: 4px;
`;

export const CreatedAt = styled.span`
  font-size: 12px;
  color: #bdbdbd;
`;

export const WrapperRight = styled.div`
  width: 64px;
  display: flex;
  justify-content: flex-end;
`;

export const MyQuestion = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-around;
`;

export const EditButton = styled.span``;

export const DeleteButton = styled.span``;
