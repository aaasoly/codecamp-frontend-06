import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);
  // state = {
  //   value: 3,
  // };

  const handleChange = (value: number) => {
    setValue(value);
  };
  // handleChange = value => {
  //   this.setState({ value });
  // };

  // antd의 onChange!! 기존에 쓰던 html의 onChange랑 다르다
  // value 값이 들어오는 형태
  return <Rate onChange={handleChange} value={value} />;
  // 별을 클릭하는 순간 handleChange 실행
}
