import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import { device } from "../../../../commons/responsive/breakPoint";
import { IPropsSearchMatched } from "./Boardlist.types";

export const Wrapper = styled.div`
  width: 160rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  @media ${device.laptop} {
    width: 900px;
  }
  margin: 0 auto;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
`;

export const WrapperBody = styled.div`
  width: 160rem;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  gap: 1;
  @media ${device.laptop} {
    width: 900px;
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 300px;
  height: 40px;
  padding: 5px 15px;
  border-radius: 30px;
  background-color: #eee;
  &:focus {
    outline: none;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
`;

export const BoradReview = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #bebebe;
  overflow: hidden;
  @media ${device.laptop} {
    width: 230px;
  }
`;

export const ThumHeader = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ThumImg = styled.img`
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ThumBody = styled.div`
  width: 100%;
  height: 170px;
  cursor: pointer;
`;

export const ThumBottom = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #bdbdbd;
  padding: 8px;
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-weight: 700;
  border-bottom: 1px solid #bdbdbd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Contents = styled.p`
  width: 300px;
  height: 120px;
  padding: 8px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Writer = styled.div`
  font-size: 12px;
  font-weight: 700;
`;

export const Like = styled.div``;

export const LikeIcon = styled(HeartFilled)`
  margin-right: 10px;
  color: coral;
`;

export const Footer = styled.div`
  width: 160rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  @media ${device.laptop} {
    width: 1200px;
  }
`;
export const WriteIcon = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  margin-top: 30px;
  background-color: #fff;
  position: absolute;
  right: 0;
  cursor: pointer;
  &:hover {
  }
`;

export const Token = styled.span`
  color: ${(props: IPropsSearchMatched) => (props.isMatched ? "skyblue" : "")};
`;
