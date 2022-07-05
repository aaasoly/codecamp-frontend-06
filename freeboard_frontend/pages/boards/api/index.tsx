import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const Wrapper = styled.div`
  width: 1600px;
  height: 900px;
  display: flex;
  justify-content: space-around;
`;

const WrapperLeft = styled.div``;

const WrapperRight = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const ImgCreateButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 16px;
  border-radius: 30px;
  border: none;
`;

const ImageBox = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Image = styled.img`
  width: 230px;
  height: 230px;
  object-fit: cover;
`;

const NoSelected = styled.div`
  width: 500px;
  height: 500px;
  background-color: #bebebe;
`;

const SelectedImg = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  opacity: ${(props) => props.opacity}%;
`;

const PhraseInput = styled.input`
  width: 500px;
  height: 50px;
`;

export const Thumnail = styled.div`
  position: relative;
  /* width: 500px;
  height: 500px;
  background-image: url(${(props) => props.select}); */
`;

const Phrase = styled.div`
  position: absolute;
  left: 40%;
  top: 50%;
`;

const OpacityBox = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
`;

export default function OpenApiPage() {
  const [photos, setPhotos] = useState([]);
  const [select, setSelect] = useState("");
  const [phrase, setPhrase] = useState("");
  const [opacity, setOpacity] = useState(100);
  const canvasRef = useRef(null);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "HZktArCXABK1NInMmUDD6JO2_WXQTPifCDCga0Fst1A",
          count: 9,
        },
      })
      .then((res) => {
        const result = res.data.map((el) => el.urls.regular);
        setPhotos(result);
      });
  }, []);

  const onClickCreateImage = () => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          client_id: "HZktArCXABK1NInMmUDD6JO2_WXQTPifCDCga0Fst1A",
          count: 9,
        },
      })
      .then((res) => {
        const result = res.data.map((el) => el.urls.regular);
        setPhotos(result);
      });
  };

  const onClickSelectImage = (e) => {
    setSelect(e);
  };

  const onChangePhrase = (e) => {
    setPhrase(e.target.value);
  };

  const onChangeOpacity = (e) => {
    setOpacity(e.target.value);
  };

  // const onClickImgSave = (e) => {
  //   html2canvas(e.target).then(function (canvas) {
  //     const aaa = canvas.toDataURL("image/jpg").split(",")[1];
  //     console.log(aaa);
  //   });
  // };

  // function handleDownload(e) {
  //   console.log(e);
  //   html2canvas(canvasRef.current).then((canvas) => {
  //     handleCaptureCanvas(canvas.toDataURL("image/png"), "thumbnail.png");
  //   });
  // }

  // function handleCaptureCanvas(uri, fileName) {
  //   const link = document.createElement("a");
  //   document.body.appendChild(link);
  //   link.href = uri;
  //   link.download = fileName;
  //   link.click();
  //   document.body.removeChild(link);
  // }

  const onDownloadBtn = () => {
    const card = canvasRef.current;
    domtoimage.toBlob(card).then((blob) => {
      saveAs(blob, "card.png");
    });
  };

  return (
    <Wrapper>
      <WrapperLeft>
        <ImgCreateButton onClick={onClickCreateImage}>
          랜덤 이미지
        </ImgCreateButton>
        <ImageBox>
          {photos.map((el, idx) => (
            <>
              <Image
                key={idx}
                src={el}
                onClick={() => onClickSelectImage(el)}
              />
            </>
          ))}
        </ImageBox>
      </WrapperLeft>
      <WrapperRight>
        <Thumnail ref={canvasRef}>
          {/* <SelectedImg src={select} opacity={opacity} /> */}
          {select ? (
            <SelectedImg id="capture" src={select} opacity={opacity} />
          ) : (
            <NoSelected>이미지를 선택</NoSelected>
          )}
          {/* /<SelectedImg src="/img/1.jpg" /> */}
          <Phrase>{phrase}</Phrase>
        </Thumnail>
        <PhraseInput
          onChange={onChangePhrase}
          placeholder="사진에 넣을 문구를 입력하세요"
        />
        <OpacityBox>
          <input
            type="radio"
            name="opacity"
            value="30"
            onChange={onChangeOpacity}
          />
          30
          <input
            type="radio"
            name="opacity"
            value="50"
            onChange={onChangeOpacity}
          />
          50
          <input
            type="radio"
            name="opacity"
            value="70"
            onChange={onChangeOpacity}
          />
          70
          <input
            type="radio"
            name="opacity"
            value="100"
            onChange={onChangeOpacity}
          />
          100
        </OpacityBox>
        <button onClick={onDownloadBtn}>이미지 저장</button>
      </WrapperRight>
    </Wrapper>
  );
}
