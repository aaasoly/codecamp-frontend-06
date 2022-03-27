import * as S from "./Boardcomments.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { getDate } from "../../../../commons/libraries/utils";

export default function CommentUI(props) {
  return (
    <S.CommentWrapper>
      <S.CommentHeader>댓글</S.CommentHeader>
      <S.CreateComment>
        <S.CommentUser>
          <S.CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
          ></S.CommentWriter>
          <S.CommentPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.CommentPassword>
          <S.CommentStars onChange={props.onChangeRating}>
            <FontAwesomeIcon icon={faStar} size="fa-2xs" />
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
            onChange={props.onChangeContents}
          ></S.CommentInput>
          <S.CommentInputBottom>
            <S.CommentCharNum>0/100</S.CommentCharNum>
            <S.CommentCreateButton onClick={props.onClickCreateComment}>
              등록하기
            </S.CommentCreateButton>
          </S.CommentInputBottom>
        </S.CommentWriteBox>
      </S.CreateComment>

      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentBox>
          <S.CommentUserIcon>
            <FontAwesomeIcon icon={faCircleUser} size="2x" />
          </S.CommentUserIcon>

          <S.CommentUnit>
            <S.UserName>{el.writer}</S.UserName>
            <S.CommentContents>{el.contents}</S.CommentContents>
            <S.CommentDate>{getDate(el.createdAt)}</S.CommentDate>
          </S.CommentUnit>

          <S.CommentSetting>
            <S.CommentChange>수정</S.CommentChange>
            <S.CommentDelete onClick={props.onClickDeleteComment}>
              삭제
            </S.CommentDelete>
          </S.CommentSetting>
        </S.CommentBox>
      ))}
    </S.CommentWrapper>
  );
}
