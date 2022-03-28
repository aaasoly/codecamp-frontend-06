import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import BoardCommentWriteUI from "./BoardComment.presenter";
import {
  CREATE_BOARD_COMMENT,
  DELETE_BOARD_COMMENT,
} from "./BoardComment.queries";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
} from "../../../../commons/types/generated/types";

export default function BoardCommentWrite() {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [value, setValue] = useState(0);

  // const handleChange = (value: number) => {
  //   setValue(value);
  // };

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);

  // CREATE_COMMENTS

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };
  const onChagePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChageContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };
  const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
            rating: value,
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
      alert("댓글이 등록되었습니다.");
      // router.push(`${router.query.boardId}`);
      setWriter("");
      setPassword("");
      setContents("");
      // state 이용해서 입력버튼 클릭 후 input 창 비워주기(state가 input창에 바인딩 된 상태)
    } catch (error) {
      alert(error.message);
    }
  };

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
    <div>
      <BoardCommentWriteUI
        onClickCreateComment={onClickCreateComment}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChagePassword}
        onChangeContents={onChageContents}
        onChangeRating={onChangeRating}
        onClickDeleteComment={onClickDeleteComment}
        // state를 props로 넘겨주기 > 제어 컴포넌트 만들기
        contents={contents}
        writer={writer}
        password={password}
      />
    </div>
  );
}
