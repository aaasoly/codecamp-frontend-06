import styled from "@emotion/styled";
import { CommentOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { device } from "../../../../commons/responsive/breakPoint";

export const CommentWrapper = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90rem;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;

export const CommentHeader = styled.div`
  font-size: 1.8rem;
`;

export const CommentIcon = styled(CommentOutlined)`
  font-size: 20px;
  color: #ffd600;
  margin-right: 1.4rem;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const CreateComment = styled.div`
  width: 120rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media ${device.laptop} {
    width: 80rem;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;

export const CommentUser = styled.div`
  width: 506px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 320px;
  }
`;

export const CommentWriter = styled.input`
  width: 180px;
  height: 5.2rem;
  border: 1px solid #bdbdbd;
  padding: 1.4rem 10.1rem 1.4rem 2rem;
  font-size: 1.6rem;
  border-radius: 30px;
  @media ${device.tablet} {
    width: 100px;
  }
`;

export const CommentPassword = styled.input`
  width: 180px;
  height: 5.2rem;
  border: 1px solid #bdbdbd;
  padding: 1.4rem 0 1.4rem 2rem;
  font-size: 1.64rem;
  border-radius: 30px;
  @media ${device.tablet} {
    width: 100px;
  }
`;

export const CommentStars = styled(Rate)`
  font-size: 20px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const CommentWriteBox = styled.div`
  border: 1px solid #bdbdbd;
`;

export const CommentContent = styled.textarea`
  width: 120rem;
  height: 10.8rem;
  border: none;
  padding: 2rem 2rem 6.4rem 2rem;
  font-size: 1.6rem;
  resize: none;
  overflow: hidden;
  border-radius: 20px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
  }
  @media ${device.laptop} {
    width: 90rem;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;

export const CommentInputBottom = styled.div`
  width: 120rem;
  height: 5.2rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: flex-start;
  @media ${device.laptop} {
    width: 90rem;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;

export const CommentCharNum = styled.div`
  width: 119.8rem;
  height: 100%;
  font-size: 1.4rem;
  border-top: 1px solid #f2f2f2;
  padding: 1.4rem 2rem;
  color: #bdbdbd;
`;
export const CommentCreateButton = styled.button`
  width: 9.1rem;
  height: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1.4rem 1.6rem;
  font-size: 1.4rem;
  cursor: pointer;
`;
