import styled from "@emotion/styled";
import { ISubmitButtonProps } from "./Boardwrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 60px 103px 100px 101px;
  margin: 50px 50px;
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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 486px;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  width: 996px;
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
`;

export const MainContents = styled.input`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  padding: 14px 16px 442px;
  margin-bottom: 16px;
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
`;

export const PostSearch = styled.button`
  width: 124px;
  height: 52px;
  box-sizing: border-box;
  background-color: #000;
  color: #fff;
  padding: 14px 16px;
`;

export const Address = styled.div`
  width: 996px;
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
`;

export const Youtube = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
`;

export const Picture = styled.div`
  width: 282px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 40px;
`;

export const Upload = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PicAttach = styled.div`
  width: 78px;
  height: 78px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #bdbdbd;
  color: #4f4f4f;
  margin-right: 24px;
`;

export const Setting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Radio = styled.input`
  width: 20px;
  height: 20px;
`;

export const RadioLabel = styled.div`
  padding-right: 22px;
`;

export const BtnSubmit = styled.button`
  width: 179px;
  height: 52px;
  padding: 14px 60px;
  border: none;
  background-color: ${(props: ISubmitButtonProps) =>
    props.isActive ? "#ffd600" : "#bdbdbd"};
  color: #000;
  margin: 80px 0 100px 409px;
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  padding-top: 10px;
`;
