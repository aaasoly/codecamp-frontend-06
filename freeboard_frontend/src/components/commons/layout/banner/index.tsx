import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSlider = styled(Slider)`
  width: 1600px;
  height: 100%;
  overflow: hidden;
`;

const ImgBox = styled.div`
  width: 100%;
`;

const BannerImg = styled.img`
  width: 100%;
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
        {/* <ImgBox>
          <BannerImg src="/img/4.jpeg" />
        </ImgBox>
        <ImgBox>
          <BannerImg src="/img/5.jpeg" />
        </ImgBox> */}
      </StyledSlider>
    </Wrapper>
  );
}
