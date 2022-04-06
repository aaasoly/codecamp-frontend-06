import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const aaa = async () => {
      // async - await 사용을 위해 새로운 함수 만들어 줌
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []);

  return (
    <div>
      <div>오픈 API 연습</div>;
      <img src={dogUrl} />
    </div>
  );
}
