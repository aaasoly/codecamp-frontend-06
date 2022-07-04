import axios from "axios";
import { useEffect, useState } from "react";
// import { createApi } from "unsplash-js";
// import nodeFetch from "node-fetch";

export default function OpenapiWithUseEffectPage() {
  const [photos, setPhotos] = useState([]);
  const onClickCreateImage = () => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "",
          count: 9,
        },
      })
      .then((res) => {
        const result = res.data.map((el) => el.urls.regular);
        setPhotos(result);
      });
  };
  console.log(photos);

  return (
    <div>
      <div>오픈 API 연습</div>
      <button onClick={onClickCreateImage}>랜덤생성</button>
      {photos.map((el, idx) => (
        <>
          <img key={idx} src={el} />
        </>
      ))}
    </div>
  );
}
