import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper__Header = styled.div`
  width: 792px;
  height: 100px;
  margin-bottom: 80px;
  border-bottom: 1px solid #bdbdbd;
`;

export const UserIcon = styled.div``;

export const Seller = styled.div``;

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

export const Price = styled.div`
  height: 53px;
  font-size: 36px;
`;

export const CreatedAt = styled.div`
  color: #bdbdbd;
`;

export const Body__Center = styled.div`
  display: flex;
  height: 730px;
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
  width: 600px;
  //height: 384px;
  //overflow: hidden;
  margin: 0 auto 50px;
  .slick-dots {
    margin-top: 30px;
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;

export const Images = styled.img``;

export const Contents = styled.div`
  width: 792px;
  height: 20%;
  margin-bottom: 40px;
  color: #4f4f4f;
  font-size: 18px;
`;

export const Tags = styled.div`
  font-size: 16px;
  color: #bdbdbd;
`;

export const Map = styled.div`
  width: 792px;
  height: 360px;
  margin-bottom: 160px;
`;

export const Wrapper__Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 382px;
  margin-bottom: 80px;
`;

export const List__Button = styled.div`
  width: 179px;
  height: 52px;
  padding: 14px 60px;
  border: 1px solid #bdbdbd;
`;

export const Edit__Button = styled.div`
  width: 179px;
  height: 52px;
  padding: 14px 60px;
  border: 1px solid #bdbdbd;
`;
