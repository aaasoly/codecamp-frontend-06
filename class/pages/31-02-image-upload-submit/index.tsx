import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function ImageUploadPreviewPage() {
  const [file1, setFile1] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      alert("파일이 없습니다!");
      return;
    }

    // FileReader 는 JS 내장 기능
    const fileReader = new FileReader();
    // file 을 읽어서 임시 url 형태로 만들어준다
    fileReader.readAsDataURL(file);
    // 파일 다 읽었을 때 함수 실행
    fileReader.onload = (data) => {
      if (typeof data.target?.result === "string") {
        // data.target?.result; // 이미지 크기만큼 url이 생성된다
        setImageUrl(data.target?.result);
        setFile1(file); // 업로드 파일 variables에 줄 값
      }
    };
  };

  const onClickSubmit = async () => {
    const result1 = await uploadFile({
      variables: { file: file1 },
    });
    // DB에 저장되는 값은 간략하게 짧아진 url
    const imageUrl = result1.data.uploadFile.url;

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지 업로드 입니다..",
          // 여기에 setState 값을 넣어도 되긴 하지만 url을 전부 가져와서 사이즈가 너무 크다
          images: [imageUrl],
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
