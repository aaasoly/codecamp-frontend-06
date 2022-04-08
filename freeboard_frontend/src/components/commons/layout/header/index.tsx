import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 1600px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  font-size: 20px;
`;

const Menu = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 12px;
  transition-duration: 0.3s;
  &:hover {
    color: violet;
  }
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLanding = () => {
    router.push("/");
  };

  const onClickBoard = () => {
    router.push("/boards");
  };

  const onClickAPI = () => {
    router.push("/boards/api");
  };

  const onClickFirebase = () => {
    router.push("/boards/firebase");
  };

  return (
    <Wrapper>
      <Box>
        <Logo onClick={onClickLanding}>Logo</Logo>
        <Menu>
          <MenuItem onClick={onClickBoard}>Board</MenuItem>
          <MenuItem>Market</MenuItem>
          <MenuItem onClick={onClickAPI}>API</MenuItem>
          <MenuItem onClick={onClickFirebase}>Guest</MenuItem>
          <MenuItem>My page</MenuItem>
        </Menu>
      </Box>
    </Wrapper>
  );
}
