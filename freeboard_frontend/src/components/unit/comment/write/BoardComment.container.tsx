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
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

export default function BoardCommentWrite(props) {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [star, setStar] = useState(0);

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

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
    setStar(value);
  };
  // const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
  //   setValue(event.target.value);
  // };
  // 댓글 등록 버튼
  const onClickCreateComment = async () => {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating: star,
          },
          boardId: String(router.query.boardId),
          // 게시글에 달린 댓글이기 때문에 boardId
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
      // router.push(`${router.query.boardId}`);
      setWriter("");
      setPassword("");
      setContents("");
      // state 이용해서 입력버튼 클릭 후 input 창 비워주기(state가 input창에 바인딩 된 상태)
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  // update comment
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

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
      if (!props.el?._id) return; // _id가 없으면 실행하지 않음

      const updateBoardCommentInput = {};
      if (star !== props.el?.rating) updateBoardCommentInput.rating = star; // 바뀌어야 수정
      if (contents !== "") updateBoardCommentInput.contents = contents;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput,
          password: password,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          // 수정 완료후 refetch
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      props.setIsEdit?.(false);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <BoardCommentWriteUI
        onClickCreateComment={onClickCreateComment}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        onChangeStar={onChangeStar}
        // state를 props로 넘겨주기 > 제어 컴포넌트 만들기
        contents={contents}
        writer={writer}
        password={password}
        onClickUpdate={onClickUpdate}
        el={props.el}
        isEdit={props.isEdit}
      />
    </div>
  );
}
