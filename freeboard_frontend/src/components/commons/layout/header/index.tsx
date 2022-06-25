import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";
import { device } from "../../../../commons/responsive/breakPoint";
import ResponsiveNav from "../navigation";

interface IHeaderWrapperProps {
  isVisible: boolean;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 9999;
  background-color: #fff;
  color: #333;
  display: ${(props: IHeaderWrapperProps) =>
    props.isVisible ? "block" : "none"};
`;

const Box = styled.div`
  width: 140rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 110rem;
  }
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
  @media ${device.tablet} {
    display: none;
  }
`;

const MenuItem = styled.span`
  font-size: 14px;
  transition-duration: 0.4s;
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
  @media ${device.laptop} {
    font-size: 12px;
  }
`;

const MenuLaptop = styled.span`
  font-size: 14px;
  display: none;
  @media ${device.tablet} {
    display: block;
  }
  color: black;
`;

const ToggleBtn = styled.div`
  position: relative;
`;

const ToggleMenuDiv = styled.div`
  position: absolute;
  top: 45px;
  right: 70px;
  display: ${(props) => (props.isToggle ? "block" : "none")};
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
  const [isVisible, setIsVisible] = useState(true);
  const [isToggle, setIsToggle] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("wheel", (e: WheelEvent) => {
      if (e.deltaY < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }

  const onClickToggle = () => {
    if (isToggle === false) {
      setIsToggle(true);
    } else {
      setIsToggle(false);
    }
  };

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
    router.push("/mypage/myitem");
  };

  const onClickLogOut = async () => {
    await logoutUser();
    location.reload();
  };

  const onClickLogIn = () => {
    router.push("/login");
  };

  return (
    <Wrapper isVisible={isVisible}>
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
        <MenuLaptop>
          <ToggleBtn onClick={onClickToggle}>메뉴</ToggleBtn>
          <ToggleMenuDiv isToggle={isToggle}>
            <ResponsiveNav />
          </ToggleMenuDiv>
        </MenuLaptop>
      </Box>
    </Wrapper>
  );
}
