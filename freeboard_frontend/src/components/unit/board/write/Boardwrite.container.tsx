import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./Boardwrite.queries";
import BoardWriteUI from "./Boardwrite.presenter";
import {
  IMyUpdateBoardInput,
  IMyVariables,
  IPropsBoardWrite,
} from "./Boardwrite.types";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function BoardWrite(props: IPropsBoardWrite) {
  const router = useRouter();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [title, setTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [titleError, setTitleError] = useState("");
  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");
  // const [address, setAddress] = useState("");
  // const [addressError, setAddressError] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
    }

    // if ( event.target.value !== "" && password !== "" && title !== "" && contents !== "" && address !== "")
    if (event.target.value && password && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }

    if (name && event.target.value && title && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }

    if (name && password && event.target.value && contents) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }

    if (name && password && title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 게시글 등록 버튼

  const onClickSubmit = async () => {
    if (name === "") setNameError("이름을 적어주세요");

    if (password === "") setPasswordError("비밀번호를 적어주세요");

    if (title === "") setTitleError("비밀번호를 적어주세요");

    if (contents === "") setContentsError("내용을 적어주세요");

    if (name !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: contents,
              youtube: youtubeUrl,
            },
          },
        });
        console.log(result);
        alert("게시물 등록에 성공하였습니다!");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 게시글 수정 버튼
  const onClickUpdate = async () => {
    // 조건문은 있을 때 튕기는 것이 아니라 없을 때 튕기게 작성해야 한다
    // early exit pattern
    if (!title && !contents) {
      alert("수정한 내용이 없습니다");
      return;
    }
    if (!password) {
      alert("비밀번호가 없습니다");
      return;
    }
    // if (title && name && password && contents) {
    //   setIsActive(true);
    // } else {
    //   setIsActive(false);
    // }

    const myUpdateBoardInput: IMyUpdateBoardInput = {};
    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;

    const myVariables: IMyVariables = {
      updateBoardInput: myUpdateBoardInput, // graphql의 key
      boardId: router.query.boardId,
      password,
    };
    if (name !== "") myVariables.writer = name;
    if (password !== "") myVariables.password = password;
    if (title !== "") myVariables.title = title;
    if (contents !== "") myVariables.contents = contents;

    try {
      await updateBoard({
        variables: myVariables,
      });
      alert("게시물 수정에 성공하였습니다!");
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
    />
  );
}
