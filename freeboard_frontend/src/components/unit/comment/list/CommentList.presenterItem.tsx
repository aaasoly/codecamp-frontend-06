import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import { IBoardCommentListItemUIProps } from "./CommentList.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { EditOutlined, CloseOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import BoardCommentWrite from "../write/BoardComment.container";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListItemUIProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [deleteId, setDeleteId] = useState("");
  const [commentPassword, setCommentPassword] = useState("");
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: {
          password: commentPassword,
          boardCommentId: deleteId,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setIsOpenDeleteModal(false);
      setDeleteId("");
      Modal.success({
        content: "댓글이 삭제되었습니다!",
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  function onClickOpenDeleteModal(event: MouseEvent<HTMLDivElement>) {
    setIsOpenDeleteModal(true);
    if (event.target instanceof Element) setDeleteId(event.currentTarget.id);
  }

  function onClickCloseDeleteModal() {
    setIsOpenDeleteModal(false);
  }

  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setCommentPassword(event.target.value);
  }

  const onClickMoveToUpdate = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isOpenDeleteModal && (
        <Modal
          visible={isOpenDeleteModal}
          onOk={onClickDeleteComment}
          onCancel={onClickCloseDeleteModal}
        >
          <div>비밀번호를 입력하세요.</div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}

      {!isEdit && (
        <S.CommentBox key={props.el._id} id={String(props.el.writer)}>
          <S.CommentUserIcon>
            <FontAwesomeIcon icon={faCircleUser} size="2x" />
          </S.CommentUserIcon>

          <S.CommentUnit>
            <S.CommentUnitHeader>
              <S.UserName>{props.el.writer}</S.UserName>
              <S.UserStar value={props.el?.rating} disabled></S.UserStar>
            </S.CommentUnitHeader>

            <S.CommentContents>{props.el.contents}</S.CommentContents>

            <S.CommentDate>{getDate(props.el.createdAt)}</S.CommentDate>
          </S.CommentUnit>

          <S.CommentSetting>
            <S.CommentChange>
              <EditOutlined id={props.el._id} onClick={onClickMoveToUpdate} />
            </S.CommentChange>
            <S.CommentDelete>
              <CloseOutlined
                id={props.el._id}
                onClick={onClickOpenDeleteModal}
              />
            </S.CommentDelete>
          </S.CommentSetting>
        </S.CommentBox>
      )}
      {isEdit === true && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </div>
  );
}
