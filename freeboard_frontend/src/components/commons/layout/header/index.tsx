import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  z-index: 9999;
  background-color: #fff;
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
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickLanding = () => {
    router.push("/");
  };

  const onClickBoard = () => {
    router.push("/boards");
  };

  const onClickMarket = () => {
    router.push("/market");
  };

  const onClickAPI = () => {
    router.push("/boards/api");
  };

  const onClickFirebase = () => {
    router.push("/boards/firebase");
  };

  const onClickMyPage = () => {
    router.push("/mypage");
  };

  return (
    <Wrapper>
      <Box>
        <Logo onClick={onClickLanding}>Logo</Logo>
        <Menu>
          <MenuItem onClick={onClickBoard}>Board</MenuItem>
          <MenuItem onClick={onClickMarket}>Market</MenuItem>
          <MenuItem onClick={onClickAPI}>API</MenuItem>
          <MenuItem onClick={onClickFirebase}>Guest</MenuItem>
          <MenuItem onClick={onClickMyPage}>My page</MenuItem>
          <div>{data?.fetchUserLoggedIn.name}</div>
        </Menu>
      </Box>
    </Wrapper>
  );
}
