import styled from "@emotion/styled";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";
import { device } from "../../../../commons/responsive/breakPoint";

//  게시글 상세 전체
export const Wrapper = styled.div`
  width: 160rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto 40px;
  @media ${device.laptop} {
    width: 120rem;
  }
  @media ${device.tablet} {
    max-width: 500px;
  }
`;

export const PostWrapper = styled.div`
  width: 120rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 102px;
  border-radius: 30px;
  @media ${device.laptop} {
    width: 90rem;
  }
  @media ${device.tablet} {
    max-width: 500px;
  }
`;

export const PostHeader = styled.div`
  width: 99.6rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #bdbdbd;
  @media ${device.laptop} {
    width: 69.6rem;
  }
  @media ${device.tablet} {
    width: 400px;
    height: 100px;
  }
`;

// 작성 정보
export const HeaderLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;
`;
export const PostUserIcon = styled.div`
  font-size: 18px;
  color: #bdbdbd;
  @media ${device.tablet} {
    font-size: 12px;
  }
`;
export const PostUser = styled.div`
  font-size: 2rem;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const PostDate = styled.div`
  color: #828282;
  font-size: 16px;
  @media ${device.tablet} {
    font-size: 10px;
  }
`;

// 본문
export const PostBody = styled.div`
  width: 99.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 80px;
  @media ${device.laptop} {
    width: 69.6rem;
  }
  @media ${device.tablet} {
    width: 400px;
  }
`;

export const PostTitle = styled.span`
  width: 100%;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  word-wrap: break-word;
`;

export const PostPicture = styled.img`
  width: 100%;
  margin-bottom: 40px;
`;

export const PostContent = styled.p`
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 120px;
  word-wrap: break-word;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const Youtube = styled(ReactPlayer)`
  margin: auto;
  width: 50px;
`;

export const LikeIcons = styled.div`
  width: 120px;
  /* height: 48px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto 60px;
`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Likebutton = styled(LikeOutlined)`
  font-size: 20px;
  color: #6b48ff;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const LikeNum = styled.div`
  color: #6b48ff;
  font-size: 18px;
  padding-top: 10px;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const DisLike = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Dislikebutton = styled(DislikeOutlined)`
  font-size: 20px;
  color: #828282;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;
export const DisLikeNum = styled.div`
  color: #828282;
  font-size: 18px;
  padding-top: 10px;
  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export const BtnGroup = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10.1rem 30.7rem 8.7rem 30.7rem;
  border-bottom: 1px solid #bdbdbd;
  @media ${device.laptop} {
    width: 90rem;
    padding: 50px 30px 50px 30px;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;
export const Btn = styled.button`
  width: 15rem;
  height: 5rem;
  font-size: 1.4rem;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    background-color: #31588a;
    color: #feffe0;
    border: 1px solid #31588a;
    cursor: pointer;
  }
`;
