import * as my from './Boardlist.styles'


export default function BoardListPagUI(props){


  return (
    <div>
      <my.Row>
        <my.ColumnNumberHead>번호</my.ColumnNumberHead>
        <my.ColumnLeftHead>제목</my.ColumnLeftHead>
        <my.ColumnCenterHead>내용</my.ColumnCenterHead>
        <my.ColumnRightHead>작성일</my.ColumnRightHead>
      </my.Row>
      <div>
        {props.data?.fetchBoards.map((el, index) => (
          <my.Row key={el._id}>
            <my.ColumnNumber>{index+1}</my.ColumnNumber>
            <my.ColumnLeft>{el.title}</my.ColumnLeft>
            <my.ColumnCenter>{el.writer}</my.ColumnCenter>
            <my.ColumnRight>{el.createdAt.slice(0,10)}</my.ColumnRight>
          </my.Row>
        ))}
      </div>
    </div>
  )
}
