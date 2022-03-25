import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./Boardlist.styles";
import { IPropsBoardListPageUI } from "./Boardlist.types";

export default function BoardListPageUI(props: IPropsBoardListPageUI) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.ColumnNumberHead>번호</S.ColumnNumberHead>
        <S.ColumnTitleHead>제목</S.ColumnTitleHead>
        <S.ColumnContentsHead>작성자</S.ColumnContentsHead>
        <S.ColumnDateHead>작성일</S.ColumnDateHead>
      </S.Row>
      {/*map(처리할 요소, 처리할 요소의 인덱스, 현재 배열)*/}
      {props.data?.fetchBoards.map((el: any, index: number) => (
        <S.Row key={el._id}>
          <S.ColumnNumber>
            {props.data?.fetchBoards.length - index}
          </S.ColumnNumber>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}
          </S.ColumnTitle>
          <S.ColumnWriter>{el.writer}</S.ColumnWriter>
          <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
          {/* <S.ColumnRight>{el.createdAt}</S.ColumnRight> */}
        </S.Row>
      ))}

      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
