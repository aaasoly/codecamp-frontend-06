import styled from "@emotion/styled";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player";

//  게시글 상세 전체
export const Wrapper = styled.div`
  width: 100%;
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const PostWrapper = styled.div`
  width: 1200px;
  /* height: 1602px; */
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 102px;
  box-sizing: border-box;
`;
export const PostHeader = styled.div`
  width: 996px;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-top: 80px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;

// 작성 정보
export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 16.67px;
  /* width: 126px; */
`;
export const PostUserIcon = styled.div`
  width: 46px;
  height: 46px;
  color: #bdbdbd;
`;
export const PostUser = styled.div`
  font-size: 24px;
`;
export const PostDate = styled.div`
  color: #828282;
  font-size: 16px;
`;

// 주소
export const HeaderRight = styled.div`
  width: 376px;
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

// 주소 말풍선
export const LocaDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10px;
  margin-bottom: 4px;
`;
export const Address = styled.div`
  /* width: 376px; */
  height: 64px;
  color: #fff;
  background-color: #c4c4c4;
  text-align: right;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 8px solid #c4c4c4;
  border-left: 0px solid transparent;
  border-right: 12px solid transparent;
  transform: rotate(180deg);
`;

export const LinkIcon = styled.div`
  color: thistle;
`;
export const LocaIcon = styled.div`
  color: thistle;
`;

// 본문
export const PostBody = styled.div`
  width: 996px;
  /* height: 1441px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 80px;
`;

export const PostTitle = styled.div`
  /* width: 285px; */
  height: 54px;
  font-size: 26px;
  margin-bottom: 40px;
`;

export const PostPicture = styled.img`
  width: 100%;
  /* height: 480px; */
  margin-bottom: 40px;
`;
export const PostText = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 120px;
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
`;
export const LikeNum = styled.div`
  color: thistle;
  font-size: 18px;
  padding-top: 10px;
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
`;
export const DisLikeNum = styled.div`
  color: #828282;
  font-size: 18px;
  padding-top: 10px;
`;

export const BtnGroup = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 101px 307px 87px 307px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Btn = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  padding: 11px 60px;
  cursor: pointer;
  &:hover {
    background-color: thistle;
    color: #fff;
  }
`;
