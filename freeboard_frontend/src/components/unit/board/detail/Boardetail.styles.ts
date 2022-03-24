import styled from '@emotion/styled'


//  게시글 상세 전체
export const Wrapper = styled.div`
  width: 1200px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
` 

export const PostWrapper = styled.div`
  width: 1200px;
  height: 1602px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 102px;
  box-sizing: border-box;
` 
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
`

// 작성 정보
export const HeaderLeft = styled.div`
  width: 190px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
export const PostUserIcon = styled.div`
  width: 46px;
  height: 46px;
  color: #bdbdbd;
`
export const PostUser = styled.div`
  font-size: 24px;
`
export const PostDate = styled.div`
  color: #828282;
  line-height: 18px;
`

// 주소
export const HeaderRigt = styled.div`
  width: 376px;
  height: 103.34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 37px;
  box-sizing: border-box;
`
export const HeaderIcon = styled.div`
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

// 주소 말풍선
export const LocaDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 16px;
  margin-bottom: 4px;
  box-sizing: border-box;
`
export const Address = styled.div`
  width: 376px;
  height: 64px; 
  color: #fff;
  background-color: #c4c4c4;
  text-align: right;
  padding: 10px 16px;
  box-sizing: border-box;
`
export const Triangle = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 8px solid #c4c4c4;
  border-left: 0px solid transparent;
  border-right: 12px solid transparent;
  transform: rotate(180deg);
  box-sizing: border-box;
`

export const LinkIcon = styled.div`
  color: #ffd600;
`
export const LocaIcon = styled.div`
  color: #ffd600;
`

export const PostBody = styled.div`
  width: 996px;
  height: 1441px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 80px;
`

export const PostTitle = styled.div`
  width: 285px;
  height: 54px;
  font-size: 36px;
  margin-bottom: 40px;
`

export const PostPictuer = styled.img`
  width: 996px;
  height: 480px;
  margin-bottom: 40px;
`
export const PostText = styled.div`
  width: 996px;
  height: 96px;
  margin-bottom: 120px;
`
export const PostVideo = styled.iframe`
  width: 486px;
  height: 240px;
  margin: 0 auto 163px;
`

export const LDbtns = styled.div`
  width: 120px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 60px;
  box-sizing: border-box;
`
export const Likebtn = styled.div`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFD600;
`

export const LikeNum = styled.div`
  color: #FFD600;
  font-size: 18px;
  padding-top: 5px;
`
export const Dislikebtn = styled.div`
  width: 40px;
  height: 51px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #828282;
`
export const DisLikeNum = styled.div`
  color: #828282;
  font-size: 18px;
`

export const BtnGroup = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 101px 307px 87px 307px;
  border-bottom: 1px solid #bdbdbd;
`
export const Btn = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: #fff;
  padding: 14px 60px;
`

export const CommentWrapper = styled.div`
  width: 1200px;
  height: 752px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const CommentHeader = styled.div`
  
`

export const CreateComment = styled.div`
  width: 1200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const UserInfo = styled.div`
  width: 506px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const UserInput = styled.input`
  width: 180px;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 14px 101px 14px 20px;
  font-size: 16px;
`

export const CommentInput = styled.input`
  width: 1200px;
  height: 161px;
  border: 1px solid #bdbdbd;
  padding: 20px 197px 64px 20px;
`

export const CommentBox = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
`

export const CommentUserIcon = styled.div`
  width: 40px;
  height: 40px;
`

export const CommentSetting = styled.div`
  width: 48px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CommentChange = styled.div`
  width: 18px;
  height: 18px;
  color: #bdbdbd;
`

export const CommentDelete = styled.div`
  width: 14px;
  height: 14px;
  color: #bdbdbd;
`

export const CommentDetail = styled.div`
  width: 1200px;
  height: 111px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const UserName = styled.div`
  font-size: 16px;
  font-weight: 500;
`
export const UserStar = styled.div`

`
export const CommentContents = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`
export const CommentDate = styled.div`
  font-size: 12px;
  color: #bdbdbd;
`