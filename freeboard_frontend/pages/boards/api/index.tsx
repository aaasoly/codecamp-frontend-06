import axios from "axios";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

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
  width: 200px;
  height: 200px;
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
  opacity: 70%;
`;

const PhraseInput = styled.input`
  width: 500px;
  height: 50px;
`;

const Thumnail = styled.div`
  position: relative;
`;

const Phrase = styled.div`
  position: absolute;
  left: 40%;
  top: 50%;
`;

export default function OpenApiPage() {
  const [photos, setPhotos] = useState([]);
  const [select, setSelect] = useState("");
  const [phrase, setPhrase] = useState("");

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
  console.log(photos);

  const onClickSelectImage = (e) => {
    setSelect(e);
  };

  const onChangePhrase = (e) => {
    setPhrase(e.target.value);
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
        <Thumnail>
          {select ? (
            <SelectedImg src={select} />
          ) : (
            <NoSelected>이미지를 선택</NoSelected>
          )}
          <Phrase>{phrase}</Phrase>
        </Thumnail>
        <PhraseInput
          onChange={onChangePhrase}
          placeholder="사진에 넣을 문구를 입력하세요"
        />
      </WrapperRight>
    </Wrapper>
  );
}
