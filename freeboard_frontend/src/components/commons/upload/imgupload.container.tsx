import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { CheckFileValidation } from "../../../commons/libraries/validation";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../commons/types/generated/types";
import ImgUploadUI from "./imgupload.presenter";
import { UPLOAD_FILE } from "./imgupload.queries";
import { Modal } from "antd";

export default function xImgUpload(props) {
  // 이미지 등록
  // const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);

    const isVaild = CheckFileValidation(file);
    if (!isVaild) return;

    try {
      const result = await uploadFile({
        variables: { file: file },
      });
      props.onChangeFileUrls(result.data?.uploadFile.url, props.index);
      console.log(result.data?.uploadFile.url);

      // setImageUrl(result.data?.uploadFile.url);
    } catch (error) {
      Modal.error({ content: error.message });
      console.log(props.onChangeFileUrls());
    }
  };

  return (
    <ImgUploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      //  defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
