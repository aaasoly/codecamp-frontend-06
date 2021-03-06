import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";

interface INavProps {
  onClickToggle: () => void;
}

const Wrapper = styled.div`
  width: 160px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px 0px;
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 16px;
`;

const MenuItem = styled.span`
  font-size: 14px;
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

export default function ResponsiveNav(props: INavProps) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOG_OUT_USER);

  const onClickBoard = () => {
    router.push("/boards");
    props.onClickToggle();
  };

  const onClickMarket = () => {
    router.push("/market");
    props.onClickToggle();
  };

  const onClickAPI = () => {
    router.push("/boards/api");
    props.onClickToggle();
  };

  const onClickFirebase = () => {
    router.push("/boards/firebase");
    props.onClickToggle();
  };

  const onClickMyPage = () => {
    router.push("/mypage/myitem");
    props.onClickToggle();
  };

  const onClickLogOut = async () => {
    await logoutUser();
    location.reload();
    props.onClickToggle();
  };

  const onClickLogIn = () => {
    router.push("/login");
    props.onClickToggle();
  };

  return (
    <Wrapper>
      <Menu>
        <MenuItem onClick={onClickBoard}>게시판</MenuItem>
        <MenuItem onClick={onClickMarket}>중고마켓</MenuItem>
        <MenuItem onClick={onClickAPI}>Unsplash</MenuItem>
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
    </Wrapper>
  );
}
