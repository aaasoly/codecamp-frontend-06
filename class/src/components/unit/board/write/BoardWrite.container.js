import { useState } from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite() {
  const [ isActive, setIsActive ] = useState(false)

  const [ myWriter, setmyWriter ] = useState("")
  const [ myTitle, setmyTitle ] = useState("")
  const [ myContents, setmyContents ] = useState("")


  const [ data, setData ] = useState("")
  const [ callAPI ] = useMutation(CREATE_BOARD) // const [함수이름] 

  const callGraphqlApi = async () => {
    // const result = await axios.get("http://koreanjson.com/posts/1") // rest-api 방식
  
    const result = await callAPI({ 
      variables: { writer: myWriter, title: myTitle, contents: myContents}
    }) // graphql-api방식
    console.log(result)
    console.log(result.data.createBoard.message)
    setData(result.data.createBoard.message)
  }

  // 이벤트 핸들러 함수
  const onChangeWriter = (event) => {
    setmyWriter(event.target.value)

    if(event.target.value !== "" && myTitle !== "" && myContents !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeTitle = (event) => {
    setmyTitle(event.target.value)

    if(myWriter !== "" && event.target.value !== "" && myContents !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeContents = (event) => {
    setmyContents(event.target.value)

    if(myWriter !== "" && myTitle !== "" && event.target.value !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
    // (event.target.value) 에는 입력한 값이 바로 저장되지만,
    // myContents는 아직 빈 값이다. = 한 박자 늦게 값을 가져옴. 
    // 만약 '바'를 입력했을 경우 myContents에는 'ㅂ'만 저장된 상태
    // useState가 함수식이 모두 끝나야 값을 반영하기 때문!
    // 각 부분의 my~ 부분을 event.target.value로 바꿔서 바로바로 값을 받아올 수 있게 한다

  return (
    <BoardWriteUI 
      onChangeWriter={onChangeWriter} 
      onChangeTitle={onChangeTitle} 
      onChangeContents={onChangeContents}
      callGraphqlApi={callGraphqlApi} 
      isActive={isActive}
      />
      
      //props 객체로 만들어주기
  )
}


// presenter import 후 index 로 export
