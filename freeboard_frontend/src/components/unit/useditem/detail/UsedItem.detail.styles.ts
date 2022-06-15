import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  width: 1200px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 30px;
`;

export const DetailTop = styled.div`
  width: 1040px;
  height: 800px;
  display: flex;
  justify-content: space-between;
`;

export const DetailTopRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SellerInfo = styled.div`
  width: 415px;
  height: 105px;
  border-radius: 15px;
  padding: 15px;
  border: 1px solid #bebebe;
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #bbb;
  border-radius: 50%;
  margin-right: 15px;
`;

export const Seller = styled.div`
  font-size: 18px;
`;

export const Wrapper__Body = styled.div`
  width: 792px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

export const Remarks = styled.div`
  height: 27px;
  font-size: 18px;
  color: #bdbdbd;
`;

export const Name = styled.div`
  height: 36px;
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

export const Price = styled.div`
  height: 53px;
  font-size: 36px;
`;

export const PickButton = styled.button`
  border: none;
  background-color: #fff;
`;

export const CreatedAt = styled.div`
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

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
  height: 384px;
  //margin-bottom: 80px;
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

export const Contents = styled.div`
  width: 100%;
  height: 20%;
  padding: 35px 10px;
  margin-bottom: 15px;
  color: #4f4f4f;
  font-size: 18px;
`;

export const TagDiv = styled.div`
  width: 100%;
  height: auto;
`;

export const Tags = styled.span`
  display: inline-block;
  font-size: 16px;
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

export const Wrapper__Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 550px;
  margin-bottom: 80px;
`;

export const List__Button = styled.div`
  width: 180px;
  height: 45px;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
`;

export const Edit__Button = styled.div`
  width: 180px;
  height: 45px;
  padding: 14px 60px;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
`;
