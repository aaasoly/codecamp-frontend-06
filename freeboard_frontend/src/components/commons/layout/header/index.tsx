import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";
import { device } from "../../../../commons/responsive/breakPoint";
import ResponsiveNav from "../navigation";

interface IHeaderProps {
  isVisible?: boolean;
  isToggle?: boolean;
}

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 50px;
  z-index: 9999;
  background-color: #fff;
  color: #333;
  transition: display ease-in-out;
  display: ${(props: IHeaderProps) => (props.isVisible ? "block" : "none")};
`;

const Box = styled.div`
  width: 160rem;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media ${device.laptop} {
    width: 90rem;
  }
  @media ${device.tablet} {
    width: 400px;
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
  color: #31588a;
`;

const ToggleBtn = styled.div`
  position: relative;
`;

const ToggleMenuDiv = styled.div`
  position: absolute;
  top: 45px;
  right: 70px;
  display: ${(props: IHeaderProps) => (props.isToggle ? "block" : "none")};
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
    setIsToggle(!isToggle);
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
    router.push("/myPage/myItem");
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
        <Logo onClick={onClickLanding}>Main</Logo>
        <Menu>
          <MenuItem onClick={onClickBoard}>?????????</MenuItem>
          <MenuItem onClick={onClickMarket}>????????????</MenuItem>
          <MenuItem onClick={onClickAPI}>Unsplash</MenuItem>
          <MenuItem onClick={onClickFirebase}>?????????</MenuItem>
          {data?.fetchUserLoggedIn ? (
            <>
              <MenuItem onClick={onClickMyPage}>?????? ?????????</MenuItem>
              <MenuItem onClick={onClickLogOut}>????????????</MenuItem>
            </>
          ) : (
            <MenuItem onClick={onClickLogIn}>?????????</MenuItem>
          )}
        </Menu>
        <MenuLaptop>
          <ToggleBtn onClick={onClickToggle}>??????</ToggleBtn>
          <ToggleMenuDiv isToggle={isToggle}>
            <ResponsiveNav onClickToggle={onClickToggle} />
          </ToggleMenuDiv>
        </MenuLaptop>
      </Box>
    </Wrapper>
  );
}
