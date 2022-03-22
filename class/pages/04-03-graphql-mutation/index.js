// import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'

const CREATE_BOARD = gql`
  mutation {
    createBoard( writer: "철수", title: "제목!!", contents: "12324") {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [ data, setData ] = useState("")
  const [ callAPI ] = useMutation(CREATE_BOARD)

  const callGraphqlApi = async () => {
    // const result = await axios.get("http://koreanjson.com/posts/1")
    const result = await callAPI() // graphql-api방식
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