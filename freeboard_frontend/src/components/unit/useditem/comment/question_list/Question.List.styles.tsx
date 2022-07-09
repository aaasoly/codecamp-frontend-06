import styled from "@emotion/styled";
import { device } from "../../../../../commons/responsive/breakPoint";

export const QuestionWrapper = styled.div`
  width: 41.5rem;
  height: auto;
  display: flex;
  border-bottom: 1px solid #bebebe;
  padding: 25px 0;
  @media ${device.tablet} {
    width: 510px;
  }
`;

export const WrapperLeft = styled.div`
  width: 40px;
`;

export const WrapperBody = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  @media ${device.tablet} {
    width: 430px;
  }
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 4px;
`;
export const Contents = styled.p`
  width: 400px;
  font-size: 14px;
  height: auto;
  margin-bottom: 5px;
  word-wrap: break-word;
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
