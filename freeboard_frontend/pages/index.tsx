// import Head from 'next/head'
// import Image from 'next/image'
import styled from "@emotion/styled";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/img/landing.jpg");
  background-size: cover;
  font-family: "DM Serif Display", serif;
  overflow: hidden;
`;

const BackSlider = styled(Slider)`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper__Header = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header__Right = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Login = styled.div`
  font-size: 16px;
  color: #fff;
`;

const MenuIcon = styled.div`
  font-size: 16px;
  color: #fff;
`;

const Wrapper__Body = styled.div`
  width: 1600px;
  height: 100%;
  /* display: flex;
  justify-content: center; */
`;

const Body__img = styled.div``;

// const ImgBox = styled.div`
//   width: 100%;
// `;

// const BannerImg = styled.img`
//   width: 500px;
//   margin: 0 auto;
// `;

// const StyledSlider = styled(Slider)`
//   width: 70%;
//   height: 100%;
// `;

const Body__Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const TextBox = styled.div`
  /* width: 70%; */
  height: 500px;
  /* background-color: rgba(255, 255, 255, 0.5); */
  text-align: right;
  padding: 100px 50px;
`;

const Title = styled.div`
  font-size: 40px;
`;

const Subtext = styled.div`
  font-size: 25rem;
  color: #fff;
`;

export default function Home() {
  const settings = {
    //dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
  };

  const router = useRouter();

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickBoard = () => {
    router.push("/boards");
  };

  const onClickMarket = () => {
    router.push("/market");
  };

  const onClickMypage = () => {
    router.push("/boards");
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={onClickBoard}>Board</Menu.Item>
      <Menu.Item onClick={onClickMarket}>Market</Menu.Item>
      <Menu.Item onClick={onClickMypage}>My Page</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Wrapper>
        <Wrapper__Header>
          <Header__Right>
            <MenuIcon>
              <Dropdown
                overlay={menu}
                // style={{ fontFamily: "DM Serif Display" }}
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Menu <DownOutlined />
                </a>
              </Dropdown>
            </MenuIcon>
            <Login onClick={onClickLogin}>Login</Login>
          </Header__Right>
        </Wrapper__Header>

        {/* <BackSlider {...settings}> */}
        <Wrapper__Body>
          <Body__img></Body__img>
          <Body__Left>
            <TextBox>
              {/* <Title>HELLO!</Title> */}
              <Subtext>Bon</Subtext>
            </TextBox>
          </Body__Left>
        </Wrapper__Body>
        {/* <Wrapper__Body>
            <Body__img></Body__img>
            <Body__Left>
              <TextBox>
                <Title>HELLO!</Title>
                <Subtext>
                  Some day you will find me. Caught beneath the landslide. In a
                  champagne supernova in the sky. Some day you will find me.
                  Caught beneath the landslide. In a champagne supernova, a
                  champagne supernova in the sky.
                </Subtext>
              </TextBox>
            </Body__Left>
          </Wrapper__Body> */}
        {/* </BackSlider> */}
      </Wrapper>
    </>
  );
}

{
  /* <StyledSlider {...settings}>
              <ImgBox>
                <BannerImg src="/img/1.jpeg" />
              </ImgBox>
              <ImgBox>
                <BannerImg src="/img/2.jpeg" />
              </ImgBox>
              <ImgBox>
                <BannerImg src="/img/3.jpeg" />
              </ImgBox>
            </StyledSlider> */
}
