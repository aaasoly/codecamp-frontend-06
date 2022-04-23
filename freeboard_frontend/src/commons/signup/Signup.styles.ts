import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 384px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

export const Wrapper__Header = styled.div`
  width: 384px;
  font-size: 16px;
`;

export const SignupLabel = styled.label`
  font-size: 12px;
`;

export const SignupInput = styled.input`
  width: 384px;
  height: 55px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;

export const SignupButton = styled.button`
  width: 384px;
  height: 62px;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  border-radius: 15px;
  margin-top: 20px;
`;
