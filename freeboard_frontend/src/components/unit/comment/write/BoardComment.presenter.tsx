import * as S from "./BoardComment.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <S.CommentWrapper>
      {!props.isEdit && (
        <S.CommentHeader>
          <S.CommentIcon />
          댓글
        </S.CommentHeader>
      )}
      {/* isEdit 가 아닐 때만 보여주기 */}
      <S.CreateComment>
        <S.CommentUser>
          <S.CommentWriter
            type="text"
            readOnly={!!props.el?.writer}
            placeholder="작성자"
            onChange={props.onChangeWriter}
            defaultValue={props.el?.writer} // props로 받아온 state 바인딩
          ></S.CommentWriter>
          <S.CommentPassword
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
          ></S.CommentPassword>
          <S.CommentStars onChange={props.onChangeStar}></S.CommentStars>
        </S.CommentUser>
        <S.CommentWriteBox>
          <S.CommentContent
            maxLength={100}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            defaultValue={props.el?.contents}
          ></S.CommentContent>
          <S.CommentInputBottom>
            <S.CommentCharNum>{props.contents.length}/100</S.CommentCharNum>
            <S.CommentCreateButton
              onClick={
                props.isEdit ? props.onClickUpdate : props.onClickCreateComment
              }
            >
              {props.isEdit ? "수정하기" : "등록하기"}
            </S.CommentCreateButton>
          </S.CommentInputBottom>
        </S.CommentWriteBox>
      </S.CreateComment>
    </S.CommentWrapper>
  );
}
