import { useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { FETCH_BOARD, DELETE_BOARD } from './Boardetail.queries'
import BoardDetailUI from './Boardetail.presenter'


export default function BoardDetail() {
  const router = useRouter()

  const [ deleteBoard ] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) }
  }) // 백엔드에 데이터를 요청해서 받아온 것을 data 변수에 저장, 받아오기 전까지 data=undefined

  async function onClickDelete() {
    try {
      await deleteBoard({
      variables: { boardId: router.query.boardId },
    })
    // alert("게시물이 삭제되었습니다!")
    router.push("/boards/list")
  } catch (error) {
    alert(error.message)
  }
    
  }

  return (

    <BoardDetailUI 
    data={data}
    onClickDelete={onClickDelete} />


  )
}