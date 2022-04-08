import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

interface IProps {
  isMatched: Boolean;
}

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
    // 객체형태로 variables 넣어줌, page: Int 이기 때문에 Number()로 감싸기
  };

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    // onChangeSearch 안에 getDebounce(event.target.value) 의 value가 data로 넘어옴
    refetch({ search: data, page: 1 });
    setKeyword(data);
  }, 2000); // 0.2초가 지날 동안 재작업이 없으면 함수 실행

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
    // refetch({ search: event.target.value, page: 1 }); // 버튼 없이 입력하면 바로바로 화면이 페치된다. 하지만 과부화 걸릴 수 있음.
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 }); // 검색어가 들어간 게시물을 찾아서 리페치
  // };

  return (
    <div>
      검색어 입력 : <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el}>
                  {el}
                </Word>
              ))}
          </MyColumn>
          {/* title을 단어 단위로 쪼갠다 */}
        </MyRow>
      ))}
      {/* 게시물 목록과 검색된 목록의 페이지 네이션은 다르기 때문에 새로 만들어 줘야한다 */}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
