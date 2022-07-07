import axios from "axios";
import { useRef, useState } from "react";
import styled from "@emotion/styled";
import html2canvas from "html2canvas";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { v4 as uuidv4 } from "uuid";
import { device } from "../../../src/commons/responsive/breakPoint";

const Wrapper = styled.div`
  width: 160rem;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  @media ${device.laptop} {
    width: 90rem;
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

const WrapperLeft = styled.div`
  width: 70rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${device.laptop} {
    width: 40rem;
    height: 55rem;
    margin-bottom: 20px;
  }
`;

const WrapperRight = styled.div`
  width: 60rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media ${device.laptop} {
    width: 40rem;
    height: 75rem;
  }
  @media ${device.tablet} {
    height: 450px;
  }
`;

const ImgCreateButton = styled.button`
  width: 150px;
  height: 50px;
  font-size: 16px;
  border-radius: 30px;
  border: none;
`;

const ImageBox = styled.div`
  width: 70rem;
  height: 70rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.laptop} {
    width: 50rem;
    height: 50rem;
  }
`;

const Image = styled.img`
  width: 23rem;
  height: 23rem;
  object-fit: cover;
  @media ${device.laptop} {
    width: 15rem;
    height: 15rem;
  }
`;

const NoSelected = styled.div`
  width: 50rem;
  height: 50rem;
  background-color: #e5e5e5;
`;

const SelectedImg = styled.img`
  width: 50rem;
  height: 50rem;
  object-fit: cover;
  opacity: ${(props) => props.opacity}%;
  filter: ${(props) => (props.isGray ? "grayscale(100%)" : "none")};
`;

const PhraseInput = styled.textarea`
  width: 50rem;
  height: 5rem;
  resize: none;
`;

export const Thumnail = styled.div`
  position: relative;
  width: 50rem;
  height: 50rem;
`;

const Phrase = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => (props.isWhite ? "#fff" : "#333")};
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  max-width: 43rem;
  max-height: 28rem;
  word-wrap: break-word;
`;

const OpacityBox = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
  align-items: center;
`;

const ImgColorBox = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;
`;

const TextColorBox = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-around;
  align-items: center;
`;

const DownloadBtn = styled.button`
  width: 150px;
  height: 50px;
  font-size: 16px;
  border-radius: 30px;
  border: none;
`;

export default function OpenApiPage() {
  const [photos, setPhotos] = useState([]);
  const [select, setSelect] = useState("");
  const [phrase, setPhrase] = useState("");
  const [opacity, setOpacity] = useState(100);
  const [isGray, setIsGray] = useState(false);
  const [isWhite, setIsWhite] = useState(false);
  const canvasRef = useRef(null);

  // 하루 리페치 제한 있어서 꺼두기
  // useEffect(() => {
  //   axios
  //     .get("https://api.unsplash.com/photos/random", {
  //       params: {
  //         client_id: "HZktArCXABK1NInMmUDD6JO2_WXQTPifCDCga0Fst1A",
  //         count: 9,
  //       },
  //     })
  //     .then((res) => {
  //       const result = res.data.map((el) => el.urls.regular);
  //       setPhotos(result);
  //     });
  // }, []);

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

  const onChangeBW = () => {
    setIsGray(true);
  };

  const onChangeColor = () => {
    setIsGray(false);
  };

  const onChangeTextWhite = () => {
    setIsWhite(true);
  };

  const onChangeTextBlack = () => {
    setIsWhite(false);
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
        <ImageBox>
          {photos.map((el) => (
            <>
              <Image
                key={uuidv4()}
                src={el}
                onClick={() => onClickSelectImage(el)}
              />
            </>
          ))}
        </ImageBox>
        <ImgCreateButton onClick={onClickCreateImage}>
          랜덤 이미지
        </ImgCreateButton>
      </WrapperLeft>
      <WrapperRight>
        <Thumnail ref={canvasRef}>
          {select ? (
            <SelectedImg src={select} opacity={opacity} isGray={isGray} />
          ) : (
            <NoSelected>이미지를 선택</NoSelected>
          )}

          <Phrase isWhite={isWhite}>{phrase}</Phrase>
        </Thumnail>
        <PhraseInput
          onChange={onChangePhrase}
          maxLength={400}
          placeholder="사진에 넣을 문구를 입력하세요"
        />
        <OpacityBox>
          Opacity:
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
        <ImgColorBox>
          색상:
          <input type="radio" name="color" onChange={onChangeBW} />
          흑백
          <input type="radio" name="color" onChange={onChangeColor} />
          컬러
        </ImgColorBox>
        <TextColorBox>
          글자색:
          <input type="radio" name="textColor" onChange={onChangeTextBlack} />
          검정
          <input type="radio" name="textColor" onChange={onChangeTextWhite} />
          흰색
        </TextColorBox>
        <DownloadBtn onClick={onDownloadBtn}>이미지 저장</DownloadBtn>
      </WrapperRight>
    </Wrapper>
  );
}
