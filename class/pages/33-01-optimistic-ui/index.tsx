import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6267bf19a8255b002988ccec" },
  });

  // 좋아요를 증가시키는 API
  const [likeBoard] = useMutation(LIKE_BOARD);

  // 클릭시 좋아요 올라가는 likeBoard 실행
  const onClickOptimisticUI = () => {
    // 좋아요 방법 1 : result = likeBoard ~~ 해서 데이터를 받아온 다음에 useState 에 저장하고, 다시 페치해서 보여주는 것(기존에 하던 것)
    likeBoard({
      variables: { boardId: "6267bf19a8255b002988ccec" },
      // 좋아요 방법 2 : 리페치 쿼리를 진행한다. api 요청 2번
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: {boardId: "6267bf19a8255b002988ccec"}
      //   }
      // ]

      optimisticResponse: {
        // 기존에 있던 좋아요 개수 불러온 다음 1을 더해준다
        // 라이크 카운트 없으면 0으로 만들어줘! undefined 는 곤란해!
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },

      // 좋아요 방법 3 : 직접 cache 를 수정해서 바꿔주기 - optimisticResponse 와 함께 사용 가능
      update(cache, { data }) {
        // optimistic에서 설정한 값이 먼저 data 로 들어오고, api 요청을 보낸 다음 들어온 응답으로 data 를 바꿔준다(=덮어쓰기)

        cache.writeQuery({
          // 페치를 불러와 캐시 직접 작성해서 조작할 수 있다
          query: FETCH_BOARD,
          variables: { boardId: "6267bf19a8255b002988ccec" },
          data: {
            fetchBoard: {
              // _id 와 __typename 은 필수!!
              _id: "6267bf19a8255b002988ccec",
              __typename: "Board",
              likeCount: data.likeBoard, // likeBoard 의 결과로 받는 것
            },
          },
        });
      },
    });
  };

  return (
    <div>
      <h1>옵티미스틱UI</h1>
      <div>현재 카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUI}>좋아요 올리기!!</button>
    </div>
  );
}
