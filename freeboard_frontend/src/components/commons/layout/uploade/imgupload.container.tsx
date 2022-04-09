import { useRef } from "react";
import { CheckFileValidation } from "../../../../commons/libraries/validation";
import { IMutation, IMutationUploadFileArgs } from "../../../../commons/types/generated/types";
import { UPLOAD_FILE } from "./imgupload.queries";

export default function ImgUpload() {


  // 이미지 등록
  // const [fileUrls, setFileUrls] = useState(["", "", ""]);
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

  )
}

