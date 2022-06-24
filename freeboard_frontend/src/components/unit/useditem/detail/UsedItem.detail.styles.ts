import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  width: 1200px;
  height: 1650px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 30px;
  font-size: 14px;
`;

export const DetailTop = styled.div`
  width: 1040px;
  height: 635px;
  display: flex;
  justify-content: space-between;
`;

export const DetailTopLeft = styled.div`
  width: 580px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DetailTopRight = styled.div`
  display: flex;
  width: 415px;
  height: 100%;
  flex-direction: column;
`;

export const SellerInfo = styled.div`
  width: 415px;
  height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  padding: 15px;
  border: 1px solid #bebebe;
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
  width: 1040px;
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const DetailBottomLeft = styled.div`
  width: 580px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DetailBottomRight = styled.div`
  width: 415px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Body__Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 254px;
  height: 67px;
  margin-bottom: 124px;
`;

export const ProductInfo = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
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

export const Body__Center = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 20px 0 40px;
  margin-bottom: 80px;
`;

export const StyledSlider = styled(Slider)`
  width: 580px;
  height: 500px;
  border-radius: 30px;
  overflow: hidden;
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
  width: 580px;
  height: 500px;
  object-fit: cover;
`;

export const ThumSlider = styled(Slider)`
  margin: 0 auto;
  width: 510px;
  height: 100px;
`;

export const ThumImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;

export const Contents = styled.div`
  width: 100%;
  height: 363px;
  padding: 35px 10px;
  color: #4f4f4f;
  font-size: 18px;
  overflow: auto;
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
  width: 580px;
  height: 370px;
  border-radius: 30px;
  overflow: hidden;
`;

export const ButtonGroup = styled.div`
  width: 580px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > button:hover {
    background-color: #6b48ff;
    color: #fff;
    border: 1px solid #6b48ff;
    cursor: pointer;
  }
`;

export const List__Button = styled.button`
  width: 150px;
  height: 45px;
  padding: 11px 47px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  background-color: #fff;
  transition-duration: 0.3s;
`;

export const Edit__Button = styled.button`
  width: 150px;
  height: 45px;
  padding: 11px 47px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  background-color: #fff;
  transition-duration: 0.3s;
`;
