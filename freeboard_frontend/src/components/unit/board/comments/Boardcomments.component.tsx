import { useRouter } from "next/router"
import { gql } from "@apollo/client"

const CREATE_COMMENTS = gql`
  mutation createBoardComment($createBoardCommentInput: createBoardCommentInput!, $boardId: ID){
    createBoardComment(createBoardCommentInput: $createBoardCommentInput, boardId: $boardId) {
      _id
      writer
      contents
    }
  }
`

export default function Comments() {
  const router = useRouter()

  // CREATE_COMMENTS
  

  // FETCH_COMMENTS
  

  // UPDATE_COMMENTS

  return (
  
  )
}