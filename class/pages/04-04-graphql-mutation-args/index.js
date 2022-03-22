// import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard( writer: $writer, title: $title, contents: $contents) { 
      _id
      number
      message
    }
  } # 한 번에 여러 정보를 받아올 수 있기 때문에 $writer 같은 데이터를 안과 밖에 모두 써준다
`

export default function GraphqlMutationPage() {
  const [ data, setData ] = useState("")
  const [ callAPI ] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {
    // const result = await axios.get("http://koreanjson.com/posts/1") // rest-api 방식
    const result = await callAPI({ 
      variables: { writer: "철수", title: "제목", contents: "내용이에요!!!"}
    }) // graphql-api방식
    console.log(result)
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message)
    // console.log(result.data.title)
    // setData(result.data.title)
  }

  return (
    <div>
      <div>{data}</div>
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
      <div></div>
    </div>
  )
}