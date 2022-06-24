import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 10rem;
  width: 160rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  z-index: 9999;
  color: #fff;
`;

const Box = styled.div`
  width: 140rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 30rem;
  font-size: 2rem;
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

  const onClickLogIn = () => {
    router.push("/login");
  };

  return (
    <Wrapper>
      <Box>
        <Logo onClick={onClickLanding}>Logo</Logo>
        <Menu>
          <MenuItem onClick={onClickBoard}>게시판</MenuItem>
          <MenuItem onClick={onClickMarket}>중고마켓</MenuItem>
          <MenuItem onClick={onClickAPI}>API</MenuItem>
          <MenuItem onClick={onClickFirebase}>방명록</MenuItem>
          {data?.fetchUserLoggedIn ? (
            <>
              <MenuItem onClick={onClickMyPage}>마이 페이지</MenuItem>
              <MenuItem onClick={onClickLogOut}>로그아웃</MenuItem>
            </>
          ) : (
            <MenuItem onClick={onClickLogIn}>로그인</MenuItem>
          )}
        </Menu>
      </Box>
    </Wrapper>
  );
}
