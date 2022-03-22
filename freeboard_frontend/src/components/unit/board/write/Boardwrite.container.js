import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { CREATE_BOARD } from './Boardwrite.queries'
import BoardWriteUI from './Boardwrite.presenter'

export default function BoardWrite() {
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

  function onChangeName(event) {
    setName(event.target.value)

    if(event.target.value !== "" && password !== "" && title !== "" && contents !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangePassword(event) {
    setPassword(event.target.value)

    if(name !== "" && event.target.value !== "" && title !== "" && contents !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeTitle(event) {
    setTitle(event.target.value)

    if(name !== "" && password !== "" && event.target.value !== "" && contents !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeContents(event) {
    setContents(event.target.value)

    if(name !== "" && password !== "" && title !== "" && event.target.value !== "" && address !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  function onChangeAddress(event) {
    setAddress(event.target.value)

    if(name !== "" && password !== "" && title !== "" && contents !== "" && event.target.value !== ""){
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onClickSubmit = async () => {
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
      alert("게시물 등록에 성공하였습니다!");
      router.push(`/boards/${result.data.createBoard._id}`);
    } catch(error) {
        console.log(error.message)
      }
    }
  }

  return (

    <BoardWriteUI 
    onChangeName={onChangeName}
    onChangePassword={onChangePassword}
    onChangeTitle={onChangeTitle}
    onChangeContents={onChangeContents}
    onChangeAddress={onChangeAddress}
    onClickSubmit={onClickSubmit}

    nameError={nameError}
    passwordError={passwordError}
    titleError={titleError}
    contentsError={contentsError}
    addressError={addressError}

    isActive={isActive}
    />

  )

}
