import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import { IBoardCommentListUIProps } from "./CommentList.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <div>
      {props.data?.fetchBoardComments.map((el) => (
        <S.CommentBox
          key={el._id}
          id={String(el.writer)}
          onClick={props.onClickWriter}
        >
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
            <S.CommentDelete>
              {/* onClick={props.onClickDeleteComment} */}
              삭제
            </S.CommentDelete>
          </S.CommentSetting>
        </S.CommentBox>
      ))}
    </div>
  );
}
