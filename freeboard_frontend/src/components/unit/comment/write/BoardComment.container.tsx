import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardComment.presenter";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardComment.queries";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { IBoardCommentWriteProps } from "./BoardComment.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangeStar = (value: number) => {
    setRating(value);
  };

  // 댓글 등록 버튼
  const onClickCreateComment = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
      setWriter("");
      setPassword("");
      setContents("");
      setRating(0);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  const onClickUpdate = async () => {
    if (!contents) {
      Modal.error({ content: "내용이 수정되지 않았습니다" });
      return;
    }
    if (!password) {
      Modal.error({ content: "비밀번호가 입력되지 않았습니다." });
      return;
    }

    try {
      if (!props.el?._id) return; // _id가 없으면 실행하지 않음, 여기 el 은 무한스크롤에서 왔음

      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (rating) updateBoardCommentInput.rating = rating;
      if (contents !== "") updateBoardCommentInput.contents = contents;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <BoardCommentWriteUI
      onClickCreateComment={onClickCreateComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeStar={onChangeStar}
      contents={contents}
      writer={writer}
      password={password}
      onClickUpdate={onClickUpdate}
      el={props.el}
      isEdit={props.isEdit}
      rating={rating}
    />
  );
}
