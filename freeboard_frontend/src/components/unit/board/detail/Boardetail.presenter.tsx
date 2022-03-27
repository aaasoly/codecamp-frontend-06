import * as S from "./Boardetail.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faEdit,
  faLink,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { IMyPropsBoardDetailUI } from "./Boardetail.types";

export default function BoardDetailUI(props: IMyPropsBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.PostWrapper>
        <S.PostHeader>
          <S.HeaderLeft>
            <S.PostUserIcon>
              <FontAwesomeIcon icon={faCircleUser} size="3x" />
            </S.PostUserIcon>
            <S.PostInfo>
              <S.PostUser>{props.data?.fetchBoard?.writer}</S.PostUser>
              <S.PostDate>Date : 2022. 03. 22</S.PostDate>
            </S.PostInfo>
          </S.HeaderLeft>

          <S.HeaderRigt>
            <S.LocaDetail>
              <S.Address>
                서울특별시 영등포구 양산로 200 <br />
                (영등포동5가, 영등포시장역) 영등포 타임스퀘어 2층
              </S.Address>
              <S.Triangle></S.Triangle>
            </S.LocaDetail>

            <S.HeaderIcon>
              <S.LinkIcon>
                <FontAwesomeIcon icon={faLink} size="2x" />
              </S.LinkIcon>
              <S.LocaIcon>
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
              </S.LocaIcon>
            </S.HeaderIcon>
          </S.HeaderRigt>
        </S.PostHeader>

        <S.PostBody>
          <S.PostTitle>{props.data?.fetchBoard?.title}</S.PostTitle>
          <S.PostPictuer src="/image.png"></S.PostPictuer>
          <S.PostText>{props.data?.fetchBoard?.contents}</S.PostText>
          <S.PostVideo></S.PostVideo>

          <S.LDbtns>
            <S.Likebtn>
              <FontAwesomeIcon icon={faThumbsUp} size="2x" />
              <S.LikeNum>1920</S.LikeNum>
            </S.Likebtn>
            <S.Dislikebtn>
              <FontAwesomeIcon icon={faThumbsDown} size="2x" />
              <S.DisLikeNum>1920</S.DisLikeNum>
            </S.Dislikebtn>
          </S.LDbtns>
        </S.PostBody>
      </S.PostWrapper>

      <S.BtnGroup>
        <S.Btn onClick={props.onClickMovetoBoardList}>목록으로</S.Btn>
        <S.Btn onClick={props.onClickMovetoUpdate}>수정하기</S.Btn>
        <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
      </S.BtnGroup>

      {/* <S.CommentWrapper>
        <S.CommentHeader>댓글</S.CommentHeader>
        <S.CreateComment>
          <S.CommentUser>
            <S.CommentWriter type="text" placeholder="작성자"></S.CommentWriter>
            <S.CommentPassword
              type="password"
              placeholder="비밀번호"
            ></S.CommentPassword>
            <S.CommentStars>
              <FontAwesomeIcon icon={faStar} fa-2xs />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </S.CommentStars>
          </S.CommentUser>
          <S.CommentWriteBox>
            <S.CommentInput
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다"
            ></S.CommentInput>
            <S.CommentInputBottom>
              <S.CommentCharNum>0/100</S.CommentCharNum>
              <S.CommentCreateButton>등록하기</S.CommentCreateButton>
            </S.CommentInputBottom>
          </S.CommentWriteBox>
        </S.CreateComment>

        <S.CommentBox>
          <S.CommentUserIcon>
            <FontAwesomeIcon icon={faCircleUser} />
          </S.CommentUserIcon>

          <S.CommentSetting>
            <S.CommentChange></S.CommentChange>
            <S.CommentDelete></S.CommentDelete>
          </S.CommentSetting>

          <S.CommentUnit>
            <S.UserName>노원두</S.UserName>
            <S.CommentContents>
              진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
              부탁드립니다~!
            </S.CommentContents>
            <S.CommentDate>2021.02.22</S.CommentDate>
          </S.CommentUnit>
        </S.CommentBox>
      </S.CommentWrapper> */}
    </S.Wrapper>
  );
}
