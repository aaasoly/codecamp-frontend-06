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
          <S.BoradReview
            key={el._id}
            id={el._id}
            onClick={props.onClickMoveToBoardDetail}
          >
            <S.ThumHeader>
              <S.ThumImg
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images?.[0]}`
                    : `/img/1.jpg`
                }
              />
            </S.ThumHeader>
            <S.ThumBody>
              <S.BodyTop>
                <S.Title>
                  {el.title
                    .replaceAll(props.keyword, `#$%${props.keyword}#$%`)
                    .split("#$%")
                    .map((word: any) => (
                      <S.Token key={uuid4()} isMatched={props.keyword === word}>
                        {word}
                      </S.Token>
                    ))}
                </S.Title>
                <S.Writer>by. {el.writer}</S.Writer>
              </S.BodyTop>
              <S.Contents>{el.contents}</S.Contents>
            </S.ThumBody>
            <S.ThumBottom>
              <S.Like>
                <S.LikeIcon />
                {el.likeCount}
              </S.Like>
            </S.ThumBottom>
          </S.BoradReview>
        ))}
      </S.WrapperBody>

      <S.Footer>
        <Pagination refetch={props.refetch} count={props.count} />
      </S.Footer>
    </S.Wrapper>
  );
}
