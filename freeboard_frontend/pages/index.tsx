// import Head from 'next/head'
// import Image from 'next/image'
import styled from "@emotion/styled";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../src/commons/responsive/breakPoint";
import { MouseEventHandler, useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  // position: relative;
  background-color: #31588a;
  /* @media ${device.laptop} {
    width: 1200px;
  } */
  font-family: "Playfair Display", serif;
`;

const Title = styled.span`
  position: absolute;
  margin: 156px auto 0;
  font-weight: 700;
  font-size: 60px;
  color: #feffe0;
`;

const MenuTest1 = styled.span`
  position: absolute;
  margin: 410px auto 0;
  font-weight: 400;
  font-size: 50px;
  color: #feffe0;
  cursor: pointer;
  :hover {
    color: #31588a;
    z-index: 9999;
  }
  padding: 20px;
  transition: color ease-in-out 0.1s;
`;

const MenuTest2 = styled.span`
  position: absolute;
  margin: 610px auto 0;
  font-weight: 400;
  font-size: 50px;
  color: #feffe0;
  cursor: pointer;
  :hover {
    color: #31588a;
    z-index: 9999;
  }
  padding: 20px;
  transition: color ease-in-out 0.1s;
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
  @media ${device.laptop} {
    left: 10px;
    top: 35px;
    width: 700px;
    height: 650px;
  }
`;

const BackBox = styled.div`
  position: absolute;
  width: 122rem;
  height: 94.3rem;
  left: 69.6rem;
  background: #cbe1e8;
  @media ${device.laptop} {
    width: 820px;
    height: 760px;
    left: 500px;
  }
`;

const GreetingKo = styled.span`
  display: inline-block;
  position: absolute;
  left: 39rem;
  top: 230px;
  font-weight: 700;
  font-size: 5rem;
  color: #fff;
  @media ${device.laptop} {
    top: 150px;
    left: 250px;
  }
`;

const GreetingEng = styled.span`
  display: inline-block;
  position: absolute;
  left: 39rem;
  top: 30rem;
  font-weight: 700;
  font-size: 5.2rem;
  color: #fff;
  @media ${device.laptop} {
    left: 250px;
    top: 210px;
  }
`;

const About = styled.p`
  display: inline-block;
  position: absolute;
  width: 45rem;
  left: 39rem;
  top: 40.8rem;
  font-size: 20px;
  color: #fff;
  @media ${device.laptop} {
    left: 250px;
    top: 318px;
  }
`;

const More = styled.span`
  display: inline-block;
  position: absolute;
  left: 39rem;
  top: 72.2rem;
  font-size: 23px;
  color: #fff;
  cursor: pointer;
  @media ${device.laptop} {
    left: 250px;
    top: 600px;
  }
`;

const Ball = styled.div`
  position: absolute;
  border-radius: 80%;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background: #fff;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  transform: translate(-50%, -50%);
  transition: width, height ease-in-out 0.3s;
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

  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      setLeft(e.clientX);
      setTop(e.clientY);
    });
  }, []);

  const changeCircle = () => {
    setWidth(110);
    setHeight(110);
  };

  const originalCircle = () => {
    setWidth(0);
    setHeight(0);
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
      <Title>Welcome</Title>
      {/* <BodyImg src="/img/landing.jpg" />
      <BackBox>
        <GreetingKo>환영합니다!</GreetingKo>
        <GreetingEng>Welcome!</GreetingEng>
        <About>
          Greeting! Welcome to my Freeboard and Second Hand Market Project.
          Thank you for visiting!
        </About>
        <More onClick={onClickBoard}>More</More>
      </BackBox> */}
      <MenuTest1
        onClick={onClickBoard}
        onMouseEnter={changeCircle}
        onMouseLeave={originalCircle}
      >
        More
      </MenuTest1>
      <MenuTest2
        onClick={onClickLogin}
        onMouseEnter={changeCircle}
        onMouseLeave={originalCircle}
      >
        Login
      </MenuTest2>
      <Ball left={left} top={top} width={width} height={height}></Ball>
    </Wrapper>
  );
}
