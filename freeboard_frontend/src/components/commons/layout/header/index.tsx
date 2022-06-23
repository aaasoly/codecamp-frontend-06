import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 160rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  z-index: 9999;
  color: #fff;
`;

const Box = styled.div`
  width: 145rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 10rem;
  font-size: 20px;
  cursor: pointer;
`;

const Menu = styled.div`
  width: 50rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.span`
  font-size: 1.4rem;
  transition-duration: 0.4s;
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
`;

const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export default function LayoutHeader() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOG_OUT_USER);

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

  const onClickLogOut = async () => {
    await logoutUser();
    location.reload();
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
          {data?.fetchUserLoggedIn ? (
            <>
              <MenuItem onClick={onClickMyPage}>My page</MenuItem>
              <MenuItem onClick={onClickLogOut}>Logout</MenuItem>
            </>
          ) : (
            ""
          )}
          <MenuItem onClick={onClickLanding}>
            {data?.fetchUserLoggedIn.name || "로그인"}
          </MenuItem>
        </Menu>
      </Box>
    </Wrapper>
  );
}
