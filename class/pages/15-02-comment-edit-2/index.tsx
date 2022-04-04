import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState(
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  );

  const onClickEdit = (event) => {
    const aaa = myIndex;
    aaa[event.target.id] = true;
    console.log(aaa);
    setMyIndex([...aaa]);
  };

  return (
    <div>
      {data?.fetchBoards.map((el, index) => (
        <div key={el._id}>
          {myIndex[index] === false && (
            <MyRow>
              <MyColumn>
                <input type="checkbox" />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {myIndex[index] === true && <div>수정하기 부분입니다</div>}
        </div>
      ))}
    </div>
  );
}
