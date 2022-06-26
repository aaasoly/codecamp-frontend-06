import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 384px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 50px;
  font-size: 14px;
`;

export const Form = styled.form`
  width: 384px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const WrapperHeader = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  width: 384px;
  height: 64px;
  padding: 20px 16px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #bdbdbd;
  }
`;

export const ErrorMessage = styled.span`
  color: #fc624d;
`;

export const LoginButton = styled.button`
  width: 384px;
  height: 64px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bebebe;
  background-color: #fff;
  cursor: pointer;
`;

export const WrapperFooter = styled.div`
  width: 384px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SignupQuestion = styled.span`
  color: #8c8c8c;
`;

export const SignUpBtn = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  font-weight: 600;
`;

export const VerticalLine = styled.div`
  height: 12px;
  border: 1px solid #bdbdbd;
`;
