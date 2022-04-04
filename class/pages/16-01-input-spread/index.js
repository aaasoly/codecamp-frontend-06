// import axios from 'axios'
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  } # 한 번에 여러 정보를 받아올 수 있기 때문에 $writer 같은 데이터를 안과 밖에 모두 써준다
`;

export default function GraphqlMutationPage() {
  // const [ myWriter, setmyWriter ] = useState("")
  // const [ myTitle, setmyTitle ] = useState("")
  // const [ myContents, setmyContents ] = useState("")

  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [data, setData] = useState("");
  const [callAPI] = useMutation(CREATE_BOARD); // const [함수이름]

  const callGraphqlApi = async () => {
    // const result = await axios.get("http://koreanjson.com/posts/1") // rest-api 방식
    const result = await callAPI({
      variables: {
        ...inputs,
        // writer: input.writer,
        // title: input.title,
        // contents: input.contents,
      },
    }); // graphql-api방식
    console.log(result);
    console.log(result.data.createBoard.message);
    setData(result.data.createBoard.message);
    // console.log(result.data.title)
    // setData(result.data.title)
  };

  // 이벤트 핸들러 함수
  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      // writer: inputs.title,
      // title: inputs.title,
      // contents: inputs.contents,
      // title과 contents 는 기존 걸 살려줘야한다. 안그러면 날아감!!
      [event.target.id]: event.target.value, // [] 로 감싸주면 writer로 변환
      // 같은 key가 있을 경우 가장 아래에 적힌 value를 반영한다
    });
    // setmyWriter(event.target.value);
  };
  // const onChangeTitle = (event) => {
  //   setInputs({
  //     ...inputs,
  //     // writer: inputs.writer,
  //     // title: inputs.title,
  //     // contents: inputs.contents,
  //     [event.target.id]: event.target.value,
  //   });
  //   // setmyTitle(event.target.value);
  // };
  // const onChangeContents = (event) => {
  //   setInputs({
  //     ...inputs,
  //     // writer: inputs.writer,
  //     // title: inputs.title,
  //     // contents: inputs.contents,
  //     [event.target.id]: event.target.value,
  //   });
  //   // setmyContents(event.target.value);
  // };

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" id="writer" onChange={onChangeInputs} />
      <br />
      제목: <input type="text" id="title" onChange={onChangeInputs} />
      <br />
      내용: <input type="text" id="contents" onChange={onChangeInputs} />
      <br />
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
      <div></div>
    </div>
  );
}
