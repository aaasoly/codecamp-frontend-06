import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./Boardwrite.queries";
import BoardWriteUI from "./Boardwrite.presenter";
import { IPropsBoardWrite } from "./Boardwrite.types";
import { ChangeEvent, useEffect, useState } from "react";
import { Modal } from "antd";
import { IUpdateBoardInput } from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IPropsBoardWrite) {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    password: "",
    contents: "",
  });

  const [imageUrl, setImageUrl] = useState([]);

  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

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

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });

    const isActive = Object.values(setInputs).every((el) => el);
    setIsActive(isActive);
  };

  const onChangeYoutube = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);
  };

  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(event.target.value);
  };

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  // const onChangeFileUrls = (event) => {
  //   const file = event?.target.files?.[0];
  //   if (!file) {
  //     return;
  //   }

  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(file);
  //   fileReader.onload = (data) => {
  //     if (typeof data.target?.result === "string") {
  //       console.log(data.target?.result);
  //       setImageUrl([data.target?.result]);
  //     }
  //   };
  // };

  // 게시글 등록 버튼
  const onClickSubmit = async () => {
    if (inputs.writer === "") setWriterError("작성자를 입력해주세요");
    if (inputs.password === "") setPasswordError("비밀번호를 입력해주세요");
    if (inputs.title === "") setTitleError("제목을 입력해주세요");
    if (inputs.contents === "") setContentsError("내용을 입력해주세요");

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
              youtubeUrl,
              boardAddress: {
                // ...address,
                address,
                zipcode: postcode,
                addressDetail,
              },
              images: fileUrls,
            },
          },
        });
        console.log(result);
        Modal.success({
          content: "게시물 등록에 성공하였습니다!",
        });
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
      }
    }
  };

  // 게시글 수정 버튼
  const onClickUpdate = async () => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    // 조건문은 있을 때 튕기는 것이 아니라 없을 때 튕기게 작성해야 한다
    // early exit pattern

    if (!inputs.title && !inputs.contents && !youtubeUrl) {
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

    const updateBoardInput: IUpdateBoardInput = {};
    if (inputs.title) updateBoardInput.title = inputs.title;
    if (inputs.contents) updateBoardInput.contents = inputs.contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (postcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (postcode) updateBoardInput.boardAddress.zipcode = postcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: inputs.password,
          // images: fileUrls,
          updateBoardInput,
        },
      });
      Modal.success({
        content: "수정 되었습니다!",
      });
      router.push(`/boards/${router.query.boardId}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  // 사진
  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <BoardWriteUI
      onChangeInput={onChangeInput}
      onChangeYoutube={onChangeYoutube}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      writerError={writerError}
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
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      imageUrl={imageUrl}
    />
  );
}
