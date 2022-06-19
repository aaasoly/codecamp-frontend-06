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
  background-color: #f6f1f8;
  color: #69779b;
`;

export const MainBottom = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 100px 150px;
`;

export const MenuBox = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid #6b48ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
  border-radius: 50px;
  color: #6b48ff;
`;
