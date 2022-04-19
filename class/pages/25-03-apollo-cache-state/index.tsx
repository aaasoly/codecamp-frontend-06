import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  // 괄호가 여러 개 있을 때 async 는 await 와 가장 가까운 괄호 앞에 붙여준다.
  const onClickDelete = (boardId: string) => async () => {
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      // cache, useQuery의 결과
      update(cache, { data }) {
        // data 안에 deleteBoard
        const deletedId = data.deleteBoard; // deleteBoard 를 실행하고 남은 return 값
        cache.modify({
          fields: {
            // 현재 페치보드 상태(prev)에서 삭제된 보드 지우기
            fetchBoards: (prev, { readField }) => {
              // _id가 배열로 저장된 prev에서 deletedId 와 같은 _id 제거
              // filter로 삭제된 _id와 다른 데이터만 남겨서 return 해주기
              // el._id 를 사용할 수 없기 때문에 readField로 el 에서 _id를 꺼내온다.
              const filteredPrev = prev.filter(
                (el) => readField("_id", el) !== deletedId
              );
              return [...filteredPrev];
            },
          }, // global state 를 수정했기 때문에 사용하는 모든 컴포넌트에서 업데이트 된다
        });
      }, // variables 요청 후 cache 를 업데이트
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      update(cache, { data }) {
        // data.createBoard;
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // [{writer: , title:, contents ..}, {}, {}, {},]
              // createBoard 의 요청으로 방금 막 만들어진 게시글이 맨 앞으로 들어온다.
              // 지금 등록한 글 + ...prev
              return [data.createBoard, ...prev]; // 스프레드 연산자를 통해 기존 데이터 모두 불러오기
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){ 2. 객체 구조분해 할당으로 변수로 받는다
//   console.log(name) // "철수"
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child) 1. 객체 child 를 인자로 넘기면

// 같은 이름을 가진 데이터를 뽑아오기 때문에 순서가 다르거나 인자로 넘어온 데이터 개수가 달라도 옛날 방식과 같은 오류가 나지 않는다.

// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){ // age에 다람쥐초등학교가 들어가게 된다
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, school)
