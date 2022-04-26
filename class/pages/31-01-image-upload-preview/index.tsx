import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

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
        data.target?.result;
        setImageUrl(data.target?.result);
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
