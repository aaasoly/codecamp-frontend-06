import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 700px;
  display: flex;
  font-size: 16px;
  border: 1px solid #bebebe;
`;

export const Main = styled.div`
  width: 1200px;
  height: 700px;
  border-left: none;
  display: flex;
  flex-direction: column;
`;

export const MainTop = styled.div`
  width: 100%;
  height: 300px;
  border-bottom: 1px solid #bebebe;
`;

export const MainBottom = styled.div`
  width: 100%;
  display: flex;
`;

export const MenuBox = styled.div`
  width: 400px;
  height: 400px;
  border-right: 1px solid #bebebe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &:last-child {
    border-right: none;
  }
`;
