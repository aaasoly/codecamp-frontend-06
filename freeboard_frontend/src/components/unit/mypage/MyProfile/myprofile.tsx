import styled from "@emotion/styled";
import Sidebar from "../../../commons/layout/sidebar";

export const Wrapper = styled.div`
  width: 1290px;
  min-height: 900px;
  display: flex;
  font-size: 16px;
`;

export const Main = styled.div`
  width: 1000px;
  min-height: 900px;
  border-left: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexDiv = styled.div`
  width: 545px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  font-size: 20px;
`;

const Input = styled.input`
  width: 340px;
  height: 60px;
  border: 1px solid #000000;
  border-radius: 30px;
`;

const ActiveBtn = styled.button`
  width: 190px;
  height: 50px;
  background-color: #fff;
  border: 1px solid #000000;
  border-radius: 30px;
`;

export default function MyProfilePage() {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <FlexDiv>
          <Text>현재 비밀번호</Text>
          <Input type="password" />
        </FlexDiv>

        <FlexDiv>
          <Text>새 비밀번호</Text>
          <Input type="password" />
        </FlexDiv>

        <FlexDiv>
          <Text>비밀번호 확인</Text>
          <Input type="password" />
        </FlexDiv>

        <ActiveBtn>비밀번호 변경</ActiveBtn>
      </Main>
    </Wrapper>
  );
}
