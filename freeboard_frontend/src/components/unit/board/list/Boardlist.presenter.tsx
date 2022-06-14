// import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./Boardlist.styles";
import { IPropsBoardListPageUI } from "./Boardlist.types";
import { FileTextOutlined } from "@ant-design/icons";
import { v4 as uuid4 } from "uuid";
import Pagination from "../../../commons/pagination/Pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function BoardListPageUI(props: IPropsBoardListPageUI) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <S.Wrapper>
      <S.Wrapper__Header>
        <S.SearchInput placeholder="Search" onChange={props.onChangeSearch} />
      </S.Wrapper__Header>

      {/* <S.Row>
        <S.ColumnNumberHead>No.</S.ColumnNumberHead>
        <S.ColumnTitleHead>Title</S.ColumnTitleHead>
        <S.ColumnContentsHead>Writer</S.ColumnContentsHead>
        <S.ColumnDateHead>Date</S.ColumnDateHead>
      </S.Row> */}
      {/*map(처리할 요소, 처리할 요소의 인덱스, 현재 배열)*/}
      <S.Wrapper__Body>
        {props.data?.fetchBoards.map((el: any, index: number) => (
          <S.BoradReview key={el._id}>
            {/* <div>{props.data?.fetchBoards.length - index}</div> */}
            <S.Thum__Header>
              <S.Thum__img
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images?.[0]}`
                    : `/img/1.jpg`
                }
              />
            </S.Thum__Header>
            <S.Thum__Body>
              <S.Title id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title
                  .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                  .split("#$%")
                  .map((word: any) => (
                    <S.Token key={uuid4()} isMatched={props.keyword === word}>
                      {word}
                    </S.Token>
                  ))}
              </S.Title>
              <S.Contents>{el.contents}</S.Contents>
            </S.Thum__Body>
            <S.Thum__Bottom>
              <S.Writer>{el.writer}</S.Writer>
              {/* <div>{getDate(el.createdAt)}</div> */}
              <S.Like>
                <S.LikeIcon />
                {el.likeCount}
              </S.Like>
            </S.Thum__Bottom>
            {/* <S.ColumnRight>{el.createdAt}</S.ColumnRight> */}
          </S.BoradReview>
        ))}
      </S.Wrapper__Body>

      <S.Footer>
        <Pagination refetch={props.refetch} count={props.count} />
        <S.WriteIcon onClick={props.onClickMoveToBoardNew}>
          <FileTextOutlined />
        </S.WriteIcon>
      </S.Footer>
    </S.Wrapper>
  );
}
