import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: thistle;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 70%;
  height: 100%;
`;

const ImgBox = styled.div`
  width: 100%;
`;

const BannerImg = styled.img`
  width: 500px;
  margin: 0 auto;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <ImgBox>
          <BannerImg src="/img/1.jpeg" />
        </ImgBox>
        <ImgBox>
          <BannerImg src="/img/2.jpeg" />
        </ImgBox>
        <ImgBox>
          <BannerImg src="/img/3.jpeg" />
        </ImgBox>
        <ImgBox>
          <BannerImg src="/img/4.jpeg" />
        </ImgBox>
        <ImgBox>
          <BannerImg src="/img/5.jpeg" />
        </ImgBox>
      </StyledSlider>
    </Wrapper>
  );
}
