// import axios from 'axios'
import { ChangeEvent, useRef, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { CheckFileValidation } from "../../src/commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  } # 한 번에 여러 정보를 받아올 수 있기 때문에 $writer 같은 데이터를 안과 밖에 모두 써준다
`;

export default function GraphqlMutationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [myWriter, setmyWriter] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [myTitle, setmyTitle] = useState("");
  const [myContents, setmyContents] = useState("");

  const [data, setData] = useState("");
  const [callAPI] = useMutation(CREATE_BOARD); // const [함수이름]

  const callGraphqlApi = async () => {
    // const result = await axios.get("http://koreanjson.com/posts/1") // rest-api 방식
    const result = await callAPI({
      variables: {
        createBoardInput: {
          writer: myWriter,
          password: myPassword,
          title: myTitle,
          contents: myContents,
          images: [imageUrl],
        },
      },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    // console.log(result.data.title)
    // setData(result.data.title)
  };

  // 이벤트 핸들러 함수
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setmyWriter(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setMyPassword(event.target.value);
  };
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setmyTitle(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setmyContents(event.target.value);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // event.target.files && event.target.files[0];
    console.log(file);

    const isVaild = CheckFileValidation(file);
    if (!isVaild) return; // 아래로 내려가지 않음. true면 내려감

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
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter} /> <br />
      비밀번호: <input type="password" onChange={onChangePassword} /> <br />
      제목: <input type="text" onChange={onChangeTitle} /> <br />
      내용: <input type="text" onChange={onChangeContents} /> <br />
      <div>
        <div>이미지 업로드 연습하기</div>
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
          onClick={onClickImage}
        >
          이미지 선택
        </div>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={onChangeFile}
          ref={fileRef}
        />
        {/* multiple : 드래그 해서 파일 여러개 선택 가능! */}
        <img src={`https://storage.googleapis.com/${imageUrl}`} />
      </div>
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
      <div></div>
    </div>
  );
}
