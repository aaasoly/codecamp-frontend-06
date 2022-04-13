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
  font-size: 20px;
  margin-bottom: 20px;
`;

export const LoginInput = styled.input`
  width: 384px;
  height: 64px;
  /* border-radius: 10px; */
  padding: 20px 16px;
  /* margin-bottom: 20px; */
  border: none;
  border-bottom: 1px solid #bdbdbd;
  &:focus {
    outline: none;
  }
`;

export const MaintainLogin = styled.div``;

export const LoginButton = styled.button`
  width: 384px;
  height: 64px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: white 1px solid;
  background-color: white;
  cursor: pointer;
`;

// export const HorizonLine = styled.div`
//   width: 384px;
//   height: 1px;
//   border: 1px solid #000;
//   margin: 40px;
// `;

export const Wrapper__Footer = styled.div`
  width: 384px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const FooterMenu = styled.div``;

export const VerticalLine = styled.div`
  height: 12px;
  border: 1px solid #bdbdbd;
`;
