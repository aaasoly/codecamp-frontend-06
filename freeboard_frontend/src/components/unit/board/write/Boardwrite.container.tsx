import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./Boardwrite.queries";
import BoardWriteUI from "./Boardwrite.presenter";
import {
  IMyUpdateBoardInput,
  IMyVariables,
  IPropsBoardWrite,
} from "./Boardwrite.types";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";

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
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState();
  const [addressDetail, setAddressDetail] = useState("");

  const [isActive, setIsActive] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // 모달
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };

  // 주소
  const handleComplete = (address: any) => {
    setPostcode(address.zonecode);
    setAddress(address.address);
    setIsOpen(false);
  };

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

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
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
              youtubeUrl: youtubeUrl,
              boardAddress: {
                zipcode: postcode,
                address: address,
                addressDetail: addressDetail,
              },
            },
          },
        });
        console.log(result);
        Modal.success({
          content: "게시물 등록에 성공하였습니다!",
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  // 게시글 수정 버튼
  const onClickUpdate = async () => {
    // 조건문은 있을 때 튕기는 것이 아니라 없을 때 튕기게 작성해야 한다
    // early exit pattern

    if (!title && !contents && !youtubeUrl) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    } else {
      setIsActive(true);
    }
    if (!password) {
      Modal.error({ content: "비밀번호를 입력하세요." });
      return;
    } else {
      setIsActive(true);
    }

    const myVariables: IMyVariables = {
      updateBoardInput: myUpdateBoardInput, // graphql의 key
      boardId: String(router.query.boardId),
      password,
    };

    const myUpdateBoardInput: IMyUpdateBoardInput = {};
    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;
    if (youtubeUrl) myUpdateBoardInput.youtubeUrl = youtubeUrl;
    if (postcode || address || addressDetail) {
      myUpdateBoardInput.boardAddress = {};

      if (postcode) myUpdateBoardInput.boardAddress.zipcode = postcode;
      if (address) myUpdateBoardInput.boardAddress.address = address;
      if (addressDetail)
        myUpdateBoardInput.boardAddress.addressDetail = addressDetail;

      if (name !== "") myVariables.writer = name;
      if (password !== "") myVariables.password = password;
      if (title !== "") myVariables.title = title;
      if (contents !== "") myVariables.contents = contents;
    }

    try {
      await updateBoard({
        variables: myVariables,
      });
      Modal.success({
        content: "수정 되었습니다!",
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <BoardWriteUI
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeYoutube={onChangeYoutube}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      nameError={nameError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      address={address}
      postcode={postcode}
      onChangeAddressDetail={onChangeAddressDetail}
    />
  );
}
