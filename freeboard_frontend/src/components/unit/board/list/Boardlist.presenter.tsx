import { getDate } from '../../../../commons/libraries/utils'
import * as my from './Boardlist.styles'

interface IPropsBoardListPageUI {
  data?: any
}

export default function BoardListPageUI(props: IPropsBoardListPageUI){


  return (
    <div>
      <my.Row>
        <my.ColumnNumberHead>번호</my.ColumnNumberHead>
        <my.ColumnLeftHead>제목</my.ColumnLeftHead>
        <my.ColumnCenterHead>내용</my.ColumnCenterHead>
        <my.ColumnRightHead>작성일</my.ColumnRightHead>
      </my.Row>
      <div>       {/*map(처리할 요소, 처리할 요소의 인덱스, 현재 배열)*/}
        {props.data?.fetchBoards.map((el, index) => (
          <my.Row key={el._id}>
            <my.ColumnNumber>{10-index}</my.ColumnNumber>
            <my.ColumnLeft>{el.title}</my.ColumnLeft>
            <my.ColumnCenter>{el.writer}</my.ColumnCenter>
            <my.ColumnRight>{getDate(el.createdAt)}</my.ColumnRight>
            {/* <my.ColumnRight>{el.createdAt}</my.ColumnRight> */}
          </my.Row>
        ))}
      </div>
    </div>
  )
}
