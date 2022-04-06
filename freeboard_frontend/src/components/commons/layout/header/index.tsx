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
  font-size: 22px;
`;

const Menu = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 16px;
  transition-duration: 0.3s;
  &:hover {
    color: violet;
  }
`;

export default function LayoutHeader() {
  const router = useRouter();

  const onClickBoard = () => {
    router.push("/");
  };

  const onClickAPI = () => {
    router.push("/boards/api");
  };

  return (
    <Wrapper>
      <Box>
        <Logo onClick={onClickBoard}>Logo</Logo>
        <Menu>
          <MenuItem>Market</MenuItem>
          <MenuItem onClick={onClickAPI}>API</MenuItem>
          <MenuItem>My page</MenuItem>
        </Menu>
      </Box>
    </Wrapper>
  );
}
