import * as S from "./imgupload.styles";
import { PictureOutlined } from "@ant-design/icons";

export default function ImgUploadUI(props) {
  return (
    <>
      {props.imgUrl ? (
        <S.PicAttach
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.imgUrl}`}
        />
      ) : (
        <PictureOutlined onClick={props.onClickUpload} />
      )}
      <input
        style={{ display: "none" }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
      />
    </>
  );
}
