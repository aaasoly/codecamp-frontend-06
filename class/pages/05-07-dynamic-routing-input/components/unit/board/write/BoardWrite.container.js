import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite() {
  const [ isActive, setIsActive ] = useState(false)
  const router = useRouter()

  const [ myWriter, setmyWriter ] = useState("")
  const [ myTitle, setmyTitle ] = useState("")
  const [ myContents, setmyContents ] = useState("")

  const [ callAPI ] = useMutation(CREATE_BOARD) // const [함수이름] 

  // 이벤트 핸들러 함수
  const onChangeWriter = (event) => {
    setmyWriter(event.target.value)

    if(event.target.value !== "" && myTitle !== "" && myContents !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeTitle = (event) => {
    setmyTitle(event.target.value)

    if(myWriter !== "" && event.target.value !== "" && myContents !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeContents = (event) => {
    setmyContents(event.target.value)

    if(myWriter !== "" && myTitle !== "" && event.target.value !== "") {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const callGraphqlApi = async () => {
    try {
      const result = await callAPI({ 
        variables: { 
          writer: myWriter, 
          title: myTitle, 
          contents: myContents}
      })
      console.log(result)
      console.log(result.data.createBoard.message)
      alert("게시글 등록에 성공했어요!")
      alert("상세 페이지로 이동해 볼까요?!")
      router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
      // template literal 방식
  
      // const banana = 3
      // const apple = 2
  
      // "철수는 바나나를 " + banana + "개 가지고 있고," + "사과를 " + apple + "개 가지고 있습니다."
      // `철수는 바나나를 ${banana}개 가지고 있고, 사과를 ${apple}개 가지고 있습니다.`
    } catch(error){
        alert(error.message)
    } finally { // 실패,성공 여부와 관계없이 무조건 실행. 보통 로그를 남김

    }
    
  }

  return (

    <BoardWrite 
    onChangeWriter={onChangeWriter}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    callGraphqlApi={callGraphqlApi}
    isActive={isActive}
    />

  )


}