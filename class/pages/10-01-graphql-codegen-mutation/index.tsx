// import axios from 'axios'
import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

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

  const [ myWriter, setmyWriter ] = useState("")
  const [ myTitle, setmyTitle ] = useState("")
  const [ myContents, setmyContents ] = useState("")


  const [ data, setData ] = useState("")
  const [ callAPI ] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD) // const [함수이름] 
                                // createBoard로 받은 result에 대한 값을 정해줌

  const callGraphqlApi = async () => {
    // const result = await axios.get("http://koreanjson.com/posts/1") // rest-api 방식
    const result = await callAPI({ 
      variables: { writer: myWriter, title: myTitle, contents: myContents}
    }) // graphql-api방식

    console.log(result)
    console.log(result.data?.createBoard?.message)
    setData(result.data?.createBoard?.message || "") // 23. setData 가 string 타입이기 때문에 빈문자열 반환
    // 혹은 if (result.data?.createBoard?.message) setData(result.data?.createBoard?.message) 로 써도 됨
  }

  // 이벤트 핸들러 함수
  const onChangeWriter = (event) => {
    setmyWriter(event.target.value)
  }
  const onChangeTitle = (event) => {
    setmyTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setmyContents(event.target.value)
  }

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <input type="text" onChange={onChangeWriter}/> <br/>
      제목: <input type="text" onChange={onChangeTitle}/> <br/>
      내용: <input type="text" onChange={onChangeContents}/> <br/>
      <button onClick={callGraphqlApi}>Graphql-API 요청하기!!!</button>
      <div></div>
    </div>
  )
}
