// 컨테이너 컴포넌트

import { useState, ChangeEvent, MouseEvent } from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { useRouter } from 'next/router'
import { IBoardWriteUIProps, IMyVariables } from './BoardWrite.types'



          // container는 무조건 부모가 아님!! 프레젠터의 부모지만 페이지의 자식
export default function BoardWrite(props: IBoardWriteUIProps) {
  const router = useRouter()
  const [ isActive, setIsActive ] = useState(false)

  const [ myWriter, setmyWriter ] = useState("")
  const [ myTitle, setmyTitle ] = useState("")
  const [ myContents, setmyContents ] = useState("")


  const [ data, setData ] = useState("")
  const [ createBoard ] = useMutation(CREATE_BOARD) // const [함수이름] 
  const [ updateBoard ] = useMutation(UPDATE_BOARD)

  //// 게시물 수정하기 함수
  const onClickUpdate = async () => {
    const myVariables: IMyVariables = { number: Number(router.query.mynumber) }

      //state               //key     
    if (myWriter !== "") myVariables.writer = myWriter // if문 한 줄 일 때 중괄호 생략 가능. 괄호 생략 후 실행문 2개를 작성하더라도 1개만 적용됨
    if (myTitle !== "") myVariables.title = myTitle
    if (myContents !== "") myVariables.contents = myContents

    await updateBoard({
      variables: myVariables
      //{ number: Number(router.query.mynumber), writer: myWriter, title: myTitle, contents: myContents }
    })
    alert("게시글 수정에 성공하였습니다!!!")
    router.push(`/09-01-boards/${router.query.mynumber}`) 
                  // myumber = 게시글번호를 변수로 담은 폴더, 수정하기에서만 사용가능!!
  }

  //// 게시물 등록하기 함수
  const callGraphqlApi = async () => {
    // const result = await axios.get("http://koreanjson.com/posts/1") // rest-api 방식
  
    const result = await createBoard({ 
      variables: { writer: myWriter, title: myTitle, contents: myContents }
    }) // graphql-api방식
    // console.log(result)
    // console.log(result.data.createBoard.message)
    // setData(result.data.createBoard.message)
    alert("게시글 등록에 성공하였습니다!!!")
    router.push(`/09-01-boards/${result.data.createBoard.number}`)
  }

  // 이벤트 핸들러 함수
  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setmyWriter(event.target.value)

    if(event.target.value !== "" && myTitle !== "" && myContents !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setmyTitle(event.target.value)

    if(myWriter !== "" && event.target.value !== "" && myContents !==""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
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
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={props.isEdit} // 페이지에서 props로 받아온 isEdit
      data={props.data}/>
      
      //props 객체로 만들어주기
  )
}


// presenter import 후 index 로 export
