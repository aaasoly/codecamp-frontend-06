import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentBox = styled.div`
  width: 1200px;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
  margin: 0 auto;
`;

export const CommentUserIcon = styled.div`
  width: 40px;
  height: 40px;
  color: #bdbdbd;
  margin-right: 16.5px;
`;

export const CommentSetting = styled.div`
  /* width: 1200; */
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const CommentChange = styled.div`
  /* width: 18px; */
  /* height: 18px; */
  color: #bdbdbd;
  margin-right: 16px;
`;

export const CommentDelete = styled.div`
  /* width: 14px; */
  /* height: 14px; */
  color: #bdbdbd;
`;

export const CommentUnit = styled.div`
  width: 90%;
  height: 111px;
  display: flex;
  flex-direction: column;
`;

export const CommentUnitHeader = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
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
  /* width: 1080px; */
  font-size: 16px;
  color: #4f4f4f;
  margin-bottom: 20px;
`;
export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start; */
`;

export const PasswordInput = styled.input`
  width: 60%;
  height: 30px;
  margin-top: 10px;
`;
