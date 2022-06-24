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
  margin-top: 40px;
  margin-bottom: 40px;
  @media ${device.laptop} {
    width: 120rem;
  }
  @media ${device.mobile} {
    width: 500px;
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
  @media ${device.mobile} {
    width: 500px;
  }
`;

export const PostHeader = styled.div`
  width: 99.6rem;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid #bdbdbd;
  box-sizing: border-box;
  @media ${device.laptop} {
    width: 69.6rem;
  }
  @media ${device.mobile} {
    width: 400px;
  }
`;

// 작성 정보
export const HeaderLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16.67px;
`;
export const PostUserIcon = styled.div`
  width: 46px;
  height: 46px;
  color: #bdbdbd;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;
export const PostUser = styled.div`
  font-size: 20px;
  @media ${device.mobile} {
    font-size: 18px;
  }
`;
export const PostDate = styled.div`
  color: #828282;
  font-size: 16px;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

// 주소
export const HeaderRight = styled.div`
  width: 37.6rem;
  height: 103.34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 37px;
  box-sizing: border-box;
`;
export const HeaderIcon = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  @media ${device.mobile} {
    width: 400px;
  }
`;

export const PostTitle = styled.span`
  font-size: 24px;
  margin-bottom: 20px;
  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const PostPicture = styled.img`
  width: 100%;
  /* height: 480px; */
  margin-bottom: 40px;
`;
export const PostContent = styled.p`
  width: 100%;
  font-size: 1.8rem;
  margin-bottom: 120px;
  word-wrap: break-word;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
export const Youtube = styled(ReactPlayer)`
  margin: auto;
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
  color: thistle;
  cursor: pointer;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
export const LikeNum = styled.div`
  color: thistle;
  font-size: 18px;
  padding-top: 10px;
  @media ${device.mobile} {
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
  @media ${device.mobile} {
    font-size: 14px;
  }
`;
export const DisLikeNum = styled.div`
  color: #828282;
  font-size: 18px;
  padding-top: 10px;
  @media ${device.mobile} {
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
  @media ${device.mobile} {
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
  &:hover {
    background-color: thistle;
    color: #fff;
    border: 1px solid #fff;
  }
`;
