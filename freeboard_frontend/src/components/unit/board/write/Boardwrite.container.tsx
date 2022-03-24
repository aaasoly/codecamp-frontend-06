import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD } from './Boardwrite.queries'
import BoardWriteUI from './Boardwrite.presenter'

interface IPropsBoardWrite {
  isEdit: boolean,
  data?: any,
  isActive: Dispatch<SetStateAction<boolean>>
}

interface IMyCreateBoardInput {
  
}

interface IMyUpdateBoardInput {
  title?: string,
  contents?: string
}

interface IMyVariables {
  updateBoardInput: object,
  boardId?: any,
  number?: number,
  writer?: string,
  password?: string,
  title?: string,
  contents?: string
}


export default function BoardWrite(props: IPropsBoardWrite) {
  const router = useRouter()

  const [ name, setName ] = useState("")
  const [ nameError, setNameError ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ passwordError, setPasswordError ] = useState("")
  const [ title, setTitle ] = useState("")

  const [ titleError, setTitleError ] = useState("")
  const [ contents, setContents ] = useState("")
  const [ contentsError, setContentsError ] = useState("")
  const [ address, setAddress ] = useState("")
  const [ addressError, setAddressError ] = useState("")

  const [ isActive, setIsActive ] = useState(false)

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)

    if(event.target.value !== "" && password !== "" && title !== "" && contents !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)

    if(name !== "" && event.target.value !== "" && title !== "" && contents !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)

    if(name !== "" && password !== "" && event.target.value !== "" && contents !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value)

    if(name !== "" && password !== "" && title !== "" && event.target.value !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value)

    if(name !== "" && password !== "" && title !== "" && contents !== "" && event.target.value !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }


  // 게시글 등록 버튼

  const onClickSubmit = async (event: MouseEvent<HTMLButtonElement>) => {

    if( name === "") {
      setNameError("이름을 적어주세요")
    } else {
      setNameError("")
    }
    if( password === "") {
      setPasswordError("비밀번호를 적어주세요")
    } else {
      setPasswordError("")
    }
    if( title === "") {
      setTitleError("비밀번호를 적어주세요")
    } else {
      setTitleError("")
    }
    if( contents === "") {
      setContentsError("내용을 적어주세요")
    } else {
      setContentsError("")
    }
    if( address === "") {
      setAddressError("주소를 적어주세요")
    } else {
      setAddressError("")
    }
    if(name !== "" && password !== "" && title !== "" && contents !== "") {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: contents
            },
          },
        });
        console.log(result)
        alert("게시물 등록에 성공하였습니다!");
        router.push(`/boards/${result.data.createBoard._id}`);
    } catch(error) {
        alert(error.message)
      }
    }
  }

  // 게시글 수정 버튼
  const onClickUpdate = async (event: MouseEvent<HTMLButtonElement>) => {
    const myUpdateBoardInput: IMyUpdateBoardInput = {}

    const myVariables: IMyVariables = { 
      updateBoardInput: myUpdateBoardInput,
      boardId: router.query.boardId }
    if (name !== "") myVariables.writer = name
    if (password !== "") myVariables.password = password
    if (title !== "") myVariables.title = title
    if (contents !== "") myVariables.contents = contents

        await updateBoard({
          variables: myVariables
        });
        alert("게시물 수정에 성공하였습니다!");
        router.push(`/boards/${router.query.boardId}`);
    }


  return (

    <BoardWriteUI 
    onChangeName={onChangeName}
    onChangePassword={onChangePassword}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    onChangeAddress={onChangeAddress}

    onClickSubmit={onClickSubmit}
    onClickUpdate={onClickUpdate}

    nameError={nameError}
    passwordError={passwordError}
    titleError={titleError}
    contentsError={contentsError}
    addressError={addressError}

    isActive={isActive}
    isEdit={props.isEdit}
    data={props.data}
    />

  )

}

