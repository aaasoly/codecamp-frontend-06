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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const BackSlider = styled(Slider)`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper__Header = styled.div`
  width: 140rem;
  height: 10rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header__Right = styled.div`
  width: 15rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Login = styled.div`
  font-size: 16px;
  color: #333;
`;

const MenuIcon = styled.div`
  font-size: 16px;
  color: #333;
`;

const BodyImg = styled.img`
  position: absolute;
  left: 20rem;
  top: 10.7rem;
  width: 83rem;
  height: 78rem;
  border-radius: 3rem;
  object-fit: cover;
  z-index: 1;
`;

const BackBox = styled.div`
  position: absolute;
  width: 122rem;
  height: 94.3rem;
  left: 69.6rem;
  background: #cbe1e8;
`;

const GreetingKo = styled.span`
  display: inline-block;
  position: absolute;
  left: 39rem;
  top: 23rem;
  font-weight: 700;
  font-size: 5rem;
  color: #fff;
`;

const GreetingEng = styled.span`
  display: inline-block;
  position: absolute;
  left: 39rem;
  top: 30rem;
  font-weight: 700;
  font-size: 5.2rem;
  color: #fff;
`;

const About = styled.p`
  display: inline-block;
  position: absolute;
  width: 45rem;
  left: 39rem;
  top: 40.8rem;
  font-size: 20px;
  color: #fff;
`;

const More = styled.span`
  display: inline-block;
  position: absolute;
  left: 39rem;
  top: 72.2rem;
  font-size: 23px;
  color: #fff;
  cursor: pointer;
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
    console.log("클릭");
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
    <Wrapper>
      {/* <Wrapper__Header>
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
        </Wrapper__Header> */}

      <BodyImg src="/img/landing.jpg" />
      <BackBox>
        <GreetingKo>환영합니다!</GreetingKo>
        <GreetingEng>Welcome!</GreetingEng>
        <About>
          Greeting! Welcome to my Freeboard and Second Hand Market Project.
          Thank you for visiting!
        </About>
        <More onClick={onClickBoard}>More</More>
      </BackBox>
    </Wrapper>
  );
}

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
