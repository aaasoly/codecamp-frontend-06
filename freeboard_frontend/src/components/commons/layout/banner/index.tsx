import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../../../commons/responsive/breakPoint";

const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    height: 300px;
  }
  @media ${device.tablet} {
    display: none;
  }
`;

const StyledSlider = styled(Slider)`
  width: 1600px;
  height: 100%;
  overflow: hidden;
  @media ${device.laptop} {
    width: 120rem;
  }
`;

const ImgBox = styled.div`
  width: 1600px;
  overflow: hidden;
  @media ${device.laptop} {
    width: 120rem;
  }
`;

const BannerImg = styled.img`
  width: 1600px;
  margin-top: -450px;
  /* margin: 0 auto; */
`;

export default function LayoutBanner() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <ImgBox>
          <BannerImg src="/img/1.jpg" />
        </ImgBox>
        <ImgBox>
          <BannerImg src="/img/2.jpg" />
        </ImgBox>
        <ImgBox>
          <BannerImg src="/img/3.jpg" />
        </ImgBox>
      </StyledSlider>
    </Wrapper>
  );
}
