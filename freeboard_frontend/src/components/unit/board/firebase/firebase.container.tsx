import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { useState } from "react";
import { firebaseApp } from "../../../../../pages/_app";

export default function FirebasePage() {
  const [writer, setWriter] = useState("");
  const [contents, setContents] = useState("");

  const onClickSubmit = async () => {
    // firebase에 데이터 한 줄 등록하기

    const GuestBook = collection(getFirestore(firebaseApp), "GuestBook");
    await addDoc(GuestBook, {
      writer: writer,
      contents: contents,
    });
  };

  const onClickFetch = async () => {
    // firebase에서 데이터 꺼내오기
    const GuestBook = collection(getFirestore(firebaseApp), "GuestBook");
    const result = await getDocs(GuestBook);
    const datas = result.docs.map((el) => el.data()); // el로부터 data 꺼내기
    console.log(datas);
  };

  const onChangWriter = (event) => {
    setWriter(event.target.value);
  };

  const onChangContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <div>
      <div>To me, From You</div>
      <br />
      Name <input type="text" onChange={onChangWriter} /> <br />
      <br />
      Talk <input type="text" onChange={onChangContents} />
      <br />
      <br />
      <button onClick={onClickSubmit}> Send </button>
      <button onClick={onClickFetch}> Find </button>
    </div>
  );
}
