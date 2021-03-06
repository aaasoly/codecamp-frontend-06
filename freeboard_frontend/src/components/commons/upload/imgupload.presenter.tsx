import * as S from "./imgupload.styles";
import { PictureOutlined } from "@ant-design/icons";

export default function ImgUploadUI(props) {
  return (
    <>
      {props.fileUrl ? (
        <S.PicAttach
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <S.ImgIcon onClick={props.onClickUpload}>
          <PictureOutlined />
        </S.ImgIcon>
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
