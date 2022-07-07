import styled from "@emotion/styled";
import { HeartFilled } from "@ant-design/icons";
import { device } from "../../../../commons/responsive/breakPoint";
import { IPropsSearchMatched } from "./Boardlist.types";

export const Wrapper = styled.div`
  width: 160rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 0 auto;
  padding-top: 40px;
  background-color: #f8f9fa;
  @media ${device.laptop} {
    width: 120rem;
  }
`;

export const WrapperHeader = styled.div`
  width: 90rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const WriteIcon = styled.button`
  width: 12.4rem;
  height: 5.2rem;
  font-size: 1.4rem;
  background-color: #fff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    background-color: #31588a;
    color: #feffe0;
    cursor: pointer;
  }
  transition-duration: 0.3s;
`;

export const SearchInput = styled.input`
  border: none;
  width: 300px;
  height: 40px;
  padding: 5px 15px;
  border-radius: 30px;
  background-color: #fff;
  border: none;
  &:focus {
    outline: none;
  }
`;

export const WrapperBody = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-wrap: wrap;
`;

export const BoardList = styled.div`
  width: 90rem;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  overflow: hidden;
  margin-bottom: 30px;
  background-color: #fff;
  padding: 0 15px;
  cursor: pointer;
  @media ${device.tablet} {
    height: 100px;
  }
`;

export const BoardListImg = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 20rem;
  height: 20rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const BoardListBody = styled.div`
  width: 60rem;
  height: 100%;
  cursor: pointer;
`;

export const BodyTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BoardTitle = styled.span`
  max-width: 50rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 20px;
`;

export const BoardWriter = styled.span`
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BoardContents = styled.p`
  width: 100%;
  height: 130px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const BoardListBottom = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 3rem;
`;

export const BoardLike = styled.div``;

export const LikeIcon = styled(HeartFilled)`
  margin-right: 5px;
  color: coral;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-bottom: 30px;
`;

export const Token = styled.span`
  font-weight: ${(props: IPropsSearchMatched) =>
    props.isMatched ? "800" : "400"};
`;
