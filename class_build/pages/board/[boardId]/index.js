import { useRouter } from "next/router";
import Head from "next/head";
import { gql, request } from "graphql-request";

export default function BoardsDetailPage(props) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <meta property="og:title" content="{props.myboardData?.title}" />
        <meta
          property="og:description"
          content="{props.myboardData?.contents}"
        />
        <meta property="og:image" content="{props.myboardData?.images[0]}" />
      </Head>
      <div>
        안녕하세요 게시글 상세페이지 입니다!! 게시글 ID는 {router.query.boardId}
      </div>
    </div>
  );
}

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      contents
      images
    }
  }
`;

// 이 페이지는 서버사이드 렌더링 할래! 라는 함수
// SSR을 할 수 있도록 next 에서 제공하는 함수
// 이름 수정 불가
// 페이지에서만 사용 가능, 컴포넌트별로 사용 불가능
// 1.브라우저에서 요청이 들어오면 2.프론트 엔드 서버에서 아래 함수 실행 후 3.백엔드에 요청 4.백엔드에서 응답 전달 5.브라우저에 출력
// 아폴로 셋팅은 하지 않기 때문에 axios 나 graphql-request 를 사용해야한다

export const getServerSideProps = async (context) => {
  // 데이터 요청할 것
  // request(endpoint, query, variables)
  const result = await request(
    // const { data } = useQuery(FETCH_BOARD) // 이건 안됨
    "https://backend06.codebootcamp.co.kr/graphql",
    FETCH_BOARD,
    {
      boardId: context.query.boardId, // apollo seting 에서 contenxt
    } // variables : 은 따로 적지 않아도 됨
  );

  return {
    props: {
      myboardData: {
        title: result.fetchBoard.title,
        contents: result.fetchBoard.contents,
        images: result.fetchBoard.images,
      },
    },
  };
};
