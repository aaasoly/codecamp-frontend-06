import axios from "axios";
import { useEffect, useState } from "react";
// import { createApi } from "unsplash-js";
// import nodeFetch from "node-fetch";

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

  // const [photo, setPhoto] = useState("");

  // const unsplash = createApi({
  //   accessKey: "HZktArCXABK1NInMmUDD6JO2_WXQTPifCDCga0Fst1A",
  //   fetch: nodeFetch,
  // });

  // useEffect(() => {
  //   const aaa = async () => {
  //     // async - await 사용을 위해 새로운 함수 만들어 줌
  //     const result = await axios.get("https://api.unsplash.com/random", {
  //       params: {
  //         client_id: "HZktArCXABK1NInMmUDD6JO2_WXQTPifCDCga0Fst1A",
  //         count: 30,
  //       },
  //     });
  //     setPhoto(prev => [...prev, result.])
  //   };
  //   aaa();
  // }, []);

  return (
    <div>
      <div>오픈 API 연습</div>
      <img src={dogUrl} />
    </div>
  );
}
