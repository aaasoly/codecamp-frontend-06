import * as S from "./Boardlist.styles";
import { IPropsBoardListPageUI } from "./Boardlist.types";
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
      <S.WrapperHeader>
        <S.WriteIcon onClick={props.onClickMoveToBoardNew}>
          새 글 작성
        </S.WriteIcon>
        <S.SearchInput
          placeholder="검색어를 입력하세요."
          onChange={props.onChangeSearch}
        />
      </S.WrapperHeader>

      <S.WrapperBody>
        {props.data?.fetchBoards.map((el: any, index: number) => (
          <S.BoardList
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoardDetail}
          >
            <S.BoardListImg>
              <S.Img
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images?.[0]}`
                    : `/img/noimage.png`
                }
              />
            </S.BoardListImg>
            <S.BoardListBody>
              <S.BodyTop>
                <S.BoardTitle>
                  {el.title
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((word: any) => (
                      <S.Token key={uuid4()} isMatched={props.keyword === word}>
                        {word}
                      </S.Token>
                    ))}
                </S.BoardTitle>
                <S.BoardWriter>by. {el.writer}</S.BoardWriter>
              </S.BodyTop>
              <S.BoardContents>{el.contents}</S.BoardContents>
            </S.BoardListBody>
            <S.BoardListBottom>
              <S.BoardLike>
                <S.LikeIcon />
                {el.likeCount}
              </S.BoardLike>
            </S.BoardListBottom>
          </S.BoardList>
        ))}
      </S.WrapperBody>

      <S.Footer>
        <Pagination refetch={props.refetch} count={props.count} />
      </S.Footer>
    </S.Wrapper>
  );
}
