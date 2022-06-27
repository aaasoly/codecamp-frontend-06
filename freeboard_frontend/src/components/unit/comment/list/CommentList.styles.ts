import styled from "@emotion/styled";
import { Rate } from "antd";
import { device } from "../../../../commons/responsive/breakPoint";

export const CommentBox = styled.div`
  width: 120rem;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  margin: 0 auto;
  font-size: 14px;
  @media ${device.laptop} {
    width: 90rem;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;

export const CommentUserIcon = styled.div`
  width: 40px;
  height: 40px;
  color: #bdbdbd;
  margin-right: 16.5px;
  font-size: 20px;
`;

export const CommentSetting = styled.div`
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CommentChange = styled.div`
  color: #bdbdbd;
  margin-right: 16px;
`;

export const CommentDelete = styled.div`
  color: #bdbdbd;
`;

export const CommentUnit = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
`;

export const CommentUnitHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const UserStar = styled(Rate)`
  font-size: 16px;
`;

export const CommentContents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
  margin-bottom: 20px;
`;

export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`;

export const PasswordInput = styled.input`
  width: 60%;
  height: 30px;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
`;
