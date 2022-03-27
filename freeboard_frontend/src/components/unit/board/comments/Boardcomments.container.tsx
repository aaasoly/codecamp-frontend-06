import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import CommentUI from "./Boardcomments.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./Boardcomments.queries";

export default function CommentDetail() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  // CREATE_COMMENTS

  const onChangeWriter = () => {
    setWriter(event.target.value);
  };
  const onChagePassword = () => {
    setPassword(event.target.value);
  };
  const onChageContents = () => {
    setContents(event.target.value);
  };
  const onChangeRating = () => {
    setRating(event.target.value);
  };
  // 댓글 등록 버튼
  const onClickCreateComment = async () => {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
      });
      alert("댓글이 등록되었습니다.");
      router.push(`${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  // FETCH_COMMENTS
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  // DELETE_COMMENTS
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const onClickDeleteComment = async () => {
    try {
      await deleteBoardComment({
        variables: { boardCommentId: router.query.boardCommentId },
      });
      alert("댓글이 삭제되었습니다!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommentUI
      onClickCreateComment={onClickCreateComment}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChagePassword}
      onChangeContents={onChageContents}
      onChangeRating={onChangeRating}
      onClickDeleteComment={onClickDeleteComment}
      data={data}
    />
  );
}
