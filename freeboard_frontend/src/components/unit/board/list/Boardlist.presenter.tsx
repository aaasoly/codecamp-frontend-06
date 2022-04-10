import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./Boardlist.styles";
import { IPropsBoardListPageUI } from "./Boardlist.types";
import { FileTextOutlined } from "@ant-design/icons";
import { v4 as uuid4 } from "uuid";
import Pagination from "../../../commons/pagination/Pagination";

export default function BoardListPageUI(props: IPropsBoardListPageUI) {
  return (
    <S.Wrapper>
      <S.Wrapper__Header>
        <S.SearchInput placeholder="Search" onChange={props.onChangeSearch} />
      </S.Wrapper__Header>

      <S.Row>
        <S.ColumnNumberHead>No.</S.ColumnNumberHead>
        <S.ColumnTitleHead>Title</S.ColumnTitleHead>
        <S.ColumnContentsHead>Writer</S.ColumnContentsHead>
        <S.ColumnDateHead>Date</S.ColumnDateHead>
      </S.Row>
      {/*map(처리할 요소, 처리할 요소의 인덱스, 현재 배열)*/}
      {props.data?.fetchBoards.map((el: any, index: number) => (
        <S.Row key={el._id}>
          <S.ColumnNumber>
            {props.data?.fetchBoards.length - index}
          </S.ColumnNumber>
          <S.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
              .split("#$%")
              .map((word: any) => (
                <S.Token key={uuid4()} isMatched={props.keyword === word}>
                  {word}
                </S.Token>
              ))}
          </S.ColumnTitle>
          <S.ColumnWriter>{el.writer}</S.ColumnWriter>
          <S.ColumnDate>{getDate(el.createdAt)}</S.ColumnDate>
          {/* <S.ColumnRight>{el.createdAt}</S.ColumnRight> */}
        </S.Row>
      ))}

      <S.Footer>
        <Pagination refetch={props.refetch} count={props.count} />
        <S.WriteIcon onClick={props.onClickMoveToBoardNew}>
          <FileTextOutlined />
        </S.WriteIcon>
      </S.Footer>
    </S.Wrapper>
  );
}
