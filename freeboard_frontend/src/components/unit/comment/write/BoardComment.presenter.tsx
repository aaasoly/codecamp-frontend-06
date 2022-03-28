import * as S from "./BoardComment.styles";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IBoardCommentWriteUIProps } from "./BoardComment.types";
import { Rate } from "antd";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.CommentWrapper>
      <S.CommentHeader>댓글</S.CommentHeader>
      <S.CreateComment>
        <S.CommentUser>
          <S.CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.writer} // props로 받아온 state 바인딩
          ></S.CommentWriter>
          <S.CommentPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            value={props.password}
          ></S.CommentPassword>
          <S.CommentStars onChange={props.onChangeRating}>
            <Rate />
          </S.CommentStars>
        </S.CommentUser>
        <S.CommentWriteBox>
          <S.CommentContent
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다"
            onChange={props.onChangeContents}
            value={props.contents}
          ></S.CommentContent>
          <S.CommentInputBottom>
            <S.CommentCharNum>{props.contents.length}/100</S.CommentCharNum>
            <S.CommentCreateButton onClick={props.onClickCreateComment}>
              등록하기
            </S.CommentCreateButton>
          </S.CommentInputBottom>
        </S.CommentWriteBox>
      </S.CreateComment>
    </S.CommentWrapper>
  );
}
