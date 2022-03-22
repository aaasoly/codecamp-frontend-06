import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARDS } from './Boardlist.queries'
import BoardListPagUI from "./Boardlist.presenter"



export default function BoardListPage(){
  // const router = useRouter()

  const { data } = useQuery(FETCH_BOARDS)
  


  return (
    <BoardListPagUI
    data={data}/>
  )
}
