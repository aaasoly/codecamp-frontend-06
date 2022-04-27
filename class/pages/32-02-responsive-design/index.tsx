import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 62.5rem; // 1000px;
  height: 1000px;
  background-color: skyblue;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: peachpuff;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
