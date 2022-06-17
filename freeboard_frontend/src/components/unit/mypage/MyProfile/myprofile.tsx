import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 910px;
  display: flex;
  flex-direction: column;
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
    </Wrapper>
  );
}
