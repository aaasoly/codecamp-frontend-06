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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  @media ${device.laptop} {
    width: 1200px;
  }
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
  height: 100px;
  width: 100px;
  background: #fff;
  left: ${(props) => props.left}px;
  top: ${(props) => props.right}px;
  mix-blend-mode: difference;
  will-change: transform;
  // transform: translate(-50%, -50%);
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
  const [right, setRight] = useState(0);

  const drag = (e: MouseEventHandler<HTMLElement>) => {
    setLeft(e.clientX);
  };

  if (typeof window !== "undefined") {
    document.addEventListener("mousemove", function (e) {
      setLeft(e.clientX);
      setRight(e.clientY);
    });
  }

  console.log(left, right);

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
      {/* <Ball left={left} right={right}></Ball> */}
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
