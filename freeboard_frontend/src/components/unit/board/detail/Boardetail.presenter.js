import { PostUserIcon, PostInfo,Btn, BtnGroup, CommentBox, CommentChange, CommentDate, CommentContents, CommentDelete, UserName, CommentDetail, CommentHeader, CommentSetting, CommentWrapper, CommentInput, UserInput, UserInfo, CreateComment, Dislikebtn, LDbtns, Likebtn, PostBody, HeaderLeft, PostHeader, PostVideo, PostPictuer, PostText, PostTitle, PostDate, PostWrapper, CommentUserIcon, Wrapper, PostUser, Address, HeaderIcon, LinkIcon, LocaIcon, LikeNum, DisLikeNum, HeaderRigt, Triangle, LocaDetail } from './Boardetail.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faEdit, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

export default function BoardDetailUI(props) {

  return (

    <Wrapper>
      <PostWrapper>
        <PostHeader>
          <HeaderLeft>
            <PostUserIcon><FontAwesomeIcon icon={faCircleUser} size="3x"/></PostUserIcon>
            <PostInfo>
              <PostUser>{props.data?.fetchBoard.writer}</PostUser>
              <PostDate>Date : 2022. 03. 22</PostDate>
            </PostInfo>
          </HeaderLeft>
          <HeaderRigt>
            <LocaDetail>
              <Address>
                서울특별시 영등포구 양산로 200 <br/>
                (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
              </Address>
              <Triangle></Triangle>
            </LocaDetail>
            <HeaderIcon>
              <LinkIcon><FontAwesomeIcon icon={faLink} size="2x"/></LinkIcon>
              <LocaIcon><FontAwesomeIcon icon={faLocationDot} size="2x"/></LocaIcon>
            </HeaderIcon>
          </HeaderRigt>
        </PostHeader>

        <PostBody>
          <PostTitle>{props.data?.fetchBoard.title}</PostTitle>
          <PostPictuer src="/image.png"></PostPictuer>
          <PostText>{props.data?.fetchBoard.contents}</PostText>
          <PostVideo></PostVideo>

          <LDbtns>
            <Likebtn>
              <FontAwesomeIcon icon={faThumbsUp} size="2x" />
              <LikeNum>1920</LikeNum>
            </Likebtn>
            <Dislikebtn>
              <FontAwesomeIcon icon={faThumbsDown} size="2x"/>
              <DisLikeNum>1920</DisLikeNum>
            </Dislikebtn>
          </LDbtns>
        </PostBody>
      </PostWrapper>

      <BtnGroup>
          <Btn>목록으로</Btn>
          <Btn>수정하기</Btn>
          <Btn
            onClick={props.onClickDelete}>삭제하기</Btn>
        </BtnGroup>

      <CommentWrapper>
        <CommentHeader>댓글</CommentHeader>
        <CreateComment>
          <UserInfo>
            <UserInput type="text" placeholder="작성자"></UserInput>
            <UserInput type="password" placeholder="비밀번호"></UserInput>
          </UserInfo>
          <CommentInput type="text" placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다"></CommentInput>
        </CreateComment>

          <CommentBox>
            <CommentUserIcon><FontAwesomeIcon icon={faCircleUser} /></CommentUserIcon>

            <CommentSetting>
              <CommentChange></CommentChange>
              <CommentDelete></CommentDelete>
            </CommentSetting>

            <CommentDetail>
              <UserName>노원두</UserName>
              <CommentContents>진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!</CommentContents>
              <CommentDate>2021.02.22</CommentDate>
            </CommentDetail>
          </CommentBox>
      </CommentWrapper>

    </Wrapper>


  )
}