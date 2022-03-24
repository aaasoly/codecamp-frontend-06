import { gql } from '@apollo/client'

export const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) { 
      _id
      number
      message
    }
  } # 한 번에 여러 정보를 받아올 수 있기 때문에 $writer 같은 데이터를 안과 밖에 모두 써준다
`

export const UPDATE_BOARD = gql`
  mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String) {
    updateBoard(number: $number, writer: $writer, title: $title, contents: $contents) { 
      _id
      number
      message
    }
  } # 한 번에 여러 정보를 받아올 수 있기 때문에 $writer 같은 데이터를 안과 밖에 모두 써준다
`