import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { device } from "../../../../commons/responsive/breakPoint";

export const Wrapper = styled.div`
  width: 120rem;
  height: 165rem;
  padding: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 30px;
  font-size: 14px;
  margin-top: 40px;
  @media ${device.tablet} {
    height: auto;
  }
`;

export const DetailTop = styled.div`
  width: 104rem;
  height: 63.5rem;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: space-between;
    height: auto;
  }
`;

export const DetailTopLeft = styled.div`
  width: 58rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.tablet} {
    width: 510px;
    height: 550px;
    border-bottom: 1px solid #bebebe;
  }
`;

export const DetailTopRight = styled.div`
  display: flex;
  width: 41.5rem;
  height: 100%;
  flex-direction: column;
  @media ${device.tablet} {
    width: 510px;
  }
`;

export const SellerInfo = styled.div`
  width: 100%;
  height: 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  padding: 15px;
  border: 1px solid #bebebe;
  @media ${device.tablet} {
    height: 105px;
  }
`;

export const SellerDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled.img`
  width: 34px;
  height: 34px;
  background-color: #bbb;
  border-radius: 50%;
  margin-right: 8px;
`;

export const Seller = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const DetailBottom = styled.div`
  width: 104rem;
  display: flex;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: column;
    height: auto;
  }
`;

export const Category = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const DetailBottomLeft = styled.div`
  width: 58rem;
  height: 60rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.tablet} {
    width: 510px;
    height: 450px;
  }
`;

export const DetailBottomRight = styled.div`
  width: 41.5rem;
  height: 65rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media ${device.tablet} {
    width: 510px;
    height: 500px;
  }
`;

export const BodyTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 254px;
  height: 67px;
  margin-bottom: 124px;
`;

export const ProductInfo = styled.div`
  width: 41rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media ${device.tablet} {
    width: 510px;
  }
`;

export const Remarks = styled.span`
  font-size: 18px;
  color: #bdbdbd;
`;

export const Name = styled.span`
  font-size: 24px;
  color: #4f4f4f;
`;

export const InfoBottom = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bebebe;
`;

export const Price = styled.span`
  font-size: 30px;
`;

export const PickUnit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PickCount = styled.span`
  font-size: 16px;
`;

export const PickButton = styled.button`
  border: none;
  background-color: #fff;
`;

export const CreatedAt = styled.span`
  color: #bdbdbd;
`;

export const BodyCenter = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0 40px;
  margin-bottom: 80px;
`;

export const StyledSlider = styled(Slider)`
  width: 58rem;
  height: 50rem;
  border-radius: 30px;
  overflow: hidden;
  @media ${device.tablet} {
    width: 500px;
    height: 400px;
  }
  /* .slick-dots {
    margin-top: 30px;
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  } */
`;

export const Images = styled.img`
  width: 58rem;
  height: 50rem;
  object-fit: cover;
  @media ${device.tablet} {
    width: 500px;
    height: 400px;
  }
`;

export const ThumSlider = styled(Slider)`
  margin: 0 auto;
  width: 51rem;
  height: 11rem;
  .slick-track > div > div {
    width: 12rem;
    height: 12rem;
  }
  @media ${device.tablet} {
    width: 410px;
    height: 100px;
    .slick-track > div > div {
      width: 100px;
      height: 100px;
    }
  }
`;

export const ThumImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 15px;
  @media ${device.tablet} {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
`;

export const Contents = styled.div`
  width: 100%;
  height: 36.3rem;
  padding: 35px 10px;
  color: #4f4f4f;
  font-size: 18px;
  overflow: auto;
  @media ${device.tablet} {
    width: 510px;
    height: 200px;
  }
`;

export const TagDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const Tags = styled.span`
  display: inline-block;
  font-size: 14px;
  padding: 6px 15px 5px;
  color: #fff;
  border-radius: 20px;
  margin-right: 5px;
  background-color: #ac92fa;
`;

export const Map = styled.div`
  width: 58rem;
  height: 40rem;
  border-radius: 20px;
  overflow: hidden;
  @media ${device.tablet} {
    width: 510px;
    height: 400px;
  }
`;

export const ButtonGroup = styled.div`
  width: 580px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > button:hover {
    background-color: #31588a;
    color: #feffe0;
    border: 1px solid #31588a;
    cursor: pointer;
  }
  @media ${device.tablet} {
    width: 510px;
  }
`;

export const ListButton = styled.button`
  width: 150px;
  height: 45px;
  padding: 11px 47px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  background-color: #fff;
  transition-duration: 0.3s;
  @media ${device.tablet} {
    width: 150px;
  }
`;

export const EditButton = styled.button`
  width: 150px;
  height: 45px;
  padding: 11px 47px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  background-color: #fff;
  transition-duration: 0.3s;
  @media ${device.tablet} {
    width: 150px;
  }
`;
