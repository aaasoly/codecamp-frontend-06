import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { FETCH_BOARDS } from './Boardlist.queries'
import BoardListPageUI from "./Boardlist.presenter"



export default function BoardListPage(){
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS)
  


  return (
    <BoardListPageUI
    data={data}/>
  )

}
