import { ChangeEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
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
export default function ImageUploadPage() {
  const [imageUrl, setImageUrl] = useState<string | undefined>("");
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myfile = event.target.files?.[0];
    // event.target.files && event.target.files[0];
    console.log(myfile);

    try {
      const result = await uploadFile({
        variables: { file: myfile },
      });
      console.log(result.data?.uploadFile.url);
      setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <div>
      <div>이미지 업로드 연습하기</div>;
      <input type="file" onChange={onChangeFile} />
      {/* multiple : 드래그 해서 파일 여러개 선택 가능! */}
      <img src={`https://storage.googleapis.com/${imageUrl}`} />
    </div>
  );
}
