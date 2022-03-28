import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
`;

export const CommentHeader = styled.div``;

export const CreateComment = styled.div`
  width: 1200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const CommentUser = styled.div`
  width: 506px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 101px 14px 20px;
  font-size: 16px;
`;

export const CommentPassword = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 0 14px 20px;
  font-size: 16px;
`;

export const CommentStars = styled.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CommentWriteBox = styled.div`
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
`;

export const CommentContent = styled.textarea`
  width: 1200px;
  height: 108px;
  border: none;
  padding: 20px 0 64px 20px;
  color: #bdbdbd;
  font-size: 16px;
`;

export const CommentInputBottom = styled.div`
  width: 1200px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const CommentCharNum = styled.div`
  width: 1198px;
  height: 52px;
  border-top: 1px solid #f2f2f2;
  padding: 14px 20px;
  color: #bdbdbd;
`;
export const CommentCreateButton = styled.button`
  width: 91px;
  height: 52px;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 14px 16px;
  font-size: 14px;
  cursor: pointer;
`;
