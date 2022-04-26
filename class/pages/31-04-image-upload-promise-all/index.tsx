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
  const [files, setFiles] = useState<(File | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ]); // 파일이 무조건 3개라는 법은 없으니까 undefined를 넣어준다
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [createBoard] = useMutation(CREATE_BOARD);

  // 몇 번째 파일인지 알기 위해 number 라는 파라미터 설정
  const onChangeFile =
    (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
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
          // spread로 복사해와야 배열 변경 가능
          const tempUrls = [...imageUrls];
          tempUrls[number] = data.target?.result; // number에 해당하는 이미지만 주소로 바꿔줌
          setImageUrls(tempUrls);

          const tempFiles = [...files];
          tempFiles[number] = file; // 변경된 부분만 새로운 file로 바꿔줌
          setFiles(tempFiles);
        }
      };
    };

  const onClickSubmit = async () => {
    // Promise.all에는 반드시 배열이 들어가있어야함!!
    const results = await Promise.all(
      files.map((el) => el && uploadFile({ variables: { file: el } }))
    );

    // url 만 뽑아내기 // el 로 받아온 data 가 있을 때만 적용해야하기 때문에 삼항연산자 사용
    const resultUrls = results.map((el) =>
      el?.data ? el?.data.uploadFile.url : ""
    );

    // files.map((el) => {

    // 초기값이 undefinded 이기 때문에 && 연산자로 써줄 수 있다
    // return el && uploadFile({ variables: {file: el} })

    // return el ? uploadFile({ variables: { file: el } }) : undefined

    // if (el) {
    //   return uploadFile({
    //     variables: { file: el },
    //   });
    // } else {
    //   return undefined;
    // }
    // })

    const result2 = await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "안녕하세요",
          contents: "이미지 업로드 입니다..",
          // 여기에 setState 값을 넣어도 되긴 하지만 url을 전부 가져와서 사이즈가 너무 크다
          images: resultUrls,
        },
      },
    });
    console.log(result2.data.createBoard._id);
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile(0)} />
      <input type="file" onChange={onChangeFile(1)} />
      <input type="file" onChange={onChangeFile(2)} />
      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />
      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </div>
  );
}
