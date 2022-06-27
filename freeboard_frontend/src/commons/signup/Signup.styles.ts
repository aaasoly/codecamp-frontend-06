import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 384px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  font-size: 14px;
  position: relative;
`;

export const WrapperHeader = styled.div`
  width: 384px;
  font-size: 16px;
`;

export const Form = styled.form`
  width: 340px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const SignupLabel = styled.label`
  font-size: 12px;
`;

export const SignupInput = styled.input`
  width: 340px;
  height: 55px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  color: #fc624d;
  font-size: 12px;
  margin-left: 10px;
`;

export const SignupButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  margin: 20px auto 20px;
`;

export const WrapperFooter = styled.div`
  width: 340px;
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
