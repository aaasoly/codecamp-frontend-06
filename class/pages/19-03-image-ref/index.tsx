import { ChangeEvent, useRef, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { CheckFileValidation } from "../../src/commons/libraries/validation";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
export default function ImageValidationPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

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
  );
}
