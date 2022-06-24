import styled from "@emotion/styled";
import { device } from "../../../../commons/responsive/breakPoint";
import { ISubmitButtonProps } from "./Boardwrite.types";

export const Wrapper = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #fff;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2); */
  padding: 6rem 10.3rem 10rem 10.1rem;
  /* margin: 50px 50px; */
  font-size: 14px;
  @media ${device.laptop} {
    width: 90rem;
  }
`;

export const MainTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-left: 411px;
  margin-bottom: 80px;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 48.6rem;
  padding-bottom: 20px;
  @media ${device.laptop} {
    width: 34rem;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 16px;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 16px;
`;

export const Item = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Blank = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  border-radius: 30px;
  :focus {
    outline: none;
  }
`;

export const MainContents = styled.textarea`
  width: 99.6rem;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  margin-bottom: 16px;
  border-radius: 30px;
  resize: none;
  :focus {
    outline: none;
  }
  @media ${device.laptop} {
    width: 70rem;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
`;

export const PostBlank = styled.input`
  width: 77px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  margin-right: 16px;
  border-radius: 25px;
  :focus {
    outline: none;
  }
`;

export const PostSearch = styled.button`
  width: 124px;
  height: 52px;
  background-color: #6b48ff;
  color: #fff;
  padding: 14px 16px;
  border: none;
  border-radius: 30px;
`;

export const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 17px;
`;
export const AddressBlank = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px;
  margin-bottom: 30px;
  border-radius: 30px;
  :focus {
    outline: none;
  }
`;

export const Youtube = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
`;

export const Picture = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
`;

export const ImgIcon = styled.div`
  font-size: 22px;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  color: #bdbdbd;
`;

export const Upload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnSubmit = styled.button`
  width: 179px;
  height: 52px;
  padding: 14px 60px;
  border: ${(props: ISubmitButtonProps) =>
    props.isActive ? "1px solid #6b48ff" : "1px solid #bebebe"};
  border-radius: 30px;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#6b48ff" : "#fff"};
  color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#fff" : "#bebebe"};
  margin: 0 auto;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 10px;
`;
