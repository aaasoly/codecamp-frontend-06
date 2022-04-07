import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./Boardwrite.queries";
import BoardWriteUI from "./Boardwrite.presenter";
import {
  IMyUpdateBoardInput,
  IMyVariables,
  IPropsBoardWrite,
} from "./Boardwrite.types";
import { ChangeEvent, useRef, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { CheckFileValidation } from "../../../../commons/libraries/validation";

export default function BoardWrite(props: IPropsBoardWrite) {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    password: "",
    contents: "",
  });

  const [address, setAddress] = useState({
    address: "",
    zipcode: "",
    addressDetail: "",
  });

  const [errors, setErrors] = useState({
    writerError: "",
    passwordError: "",
    titleError: "",
    contentsError: "",
  });

  const [imageUrl, setImageUrl] = useState<string | undefined>("");

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [title, setTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  // const [contents, setContents] = useState("");

  // const [address, setAddress] = useState("");
  // const [postcode, setPostcode] = useState();
  // const [addressDetail, setAddressDetail] = useState("");

  // const [nameError, setNameError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [titleError, setTitleError] = useState("");
  // const [contentsError, setContentsError] = useState("");

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
    setAddress({
      address: address.address,
      zipcode: address.zonecode,
    });
    // setPostcode(address.zonecode);
    // setAddress(address.address);
    setIsOpen(false);
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
    if (event.target.value) {
      setErrors({
        ...errors,
      });
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  //   if (event.target.value !== "") {
  //     setNameError("");
  //   }

  // if ( event.target.value !== "" && password !== "" && title !== "" && contents !== "" && address !== "")
  //   if (event.target.value && password && title && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  //   if (event.target.value !== "") {
  //     setPasswordError("");
  //   }

  //   if (name && event.target.value && title && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  // const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value);
  //   if (event.target.value !== "") {
  //     setTitleError("");
  //   }

  //   if (name && password && event.target.value && contents) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  // const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
  //   setContents(event.target.value);
  //   if (event.target.value !== "") {
  //     setContentsError("");
  //   }

  //   if (name && password && title && event.target.value) {
  //     setIsActive(true);
  //   } else {
  //     setIsActive(false);
  //   }
  // };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  // 게시글 등록 버튼

  const onClickSubmit = async () => {
    if (inputs.writer === "") errors.writerError;

    if (inputs.password === "") errors.passwordError;

    if (inputs.title === "") errors.titleError;

    if (inputs.contents === "") errors.contentsError;

    if (
      inputs.writer !== "" &&
      inputs.password !== "" &&
      inputs.title !== "" &&
      inputs.contents !== ""
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              ...inputs,
              images: [imageUrl],
              youtubeUrl,
              boardAddress: {
                ...address,
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

    if (!inputs.title && !inputs.contents && !inputs.youtubeUrl) {
      Modal.error({ content: "수정한 내용이 없습니다." });
      return;
    } else {
      setIsActive(true);
    }
    if (!inputs.password) {
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

      if (writer !== "") myVariables.writer = name;
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

  // 이미지 등록
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isVaild = CheckFileValidation(file);
    if (!isVaild) return;

    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickImage = () => {
    fileRef.current?.click();
  };

  return (
    <BoardWriteUI
      onChangeInput={onChangeInput}
      errors={errors}
      address={address}
      // onChangeName={onChangeName}
      // onChangePassword={onChangePassword}
      // onChangeTitle={onChangeTitle}
      // onChangeContents={onChangeContents}
      onChangeYoutube={onChangeYoutube}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      // nameError={nameError}
      // passwordError={passwordError}
      // titleError={titleError}
      // contentsError={contentsError}
      isActive={isActive}
      isEdit={props.isEdit}
      data={props.data}
      isOpen={isOpen}
      showModal={showModal}
      handleOk={handleOk}
      handleCancel={handleCancel}
      handleComplete={handleComplete}
      // address={address}
      // postcode={postcode}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeFile={onChangeFile}
      onClickImage={onClickImage}
      fileRef={fileRef}
      imageUrl={imageUrl}
    />
  );
}
