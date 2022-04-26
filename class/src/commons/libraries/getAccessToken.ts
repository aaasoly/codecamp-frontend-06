import axios from "axios";
import { GraphQLClient, gql } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    // graphql client 셋팅 전 useQuery, useMutation을 사용하기 위해 라이브러리 사용
    // graphql 또한 rest-api 이기 때문에 axios 로 요청 가능하다
    const graphQLClient = new GraphQLClient(
      // https 로 작성해야함!! cookie 의 secure 옵션 때문
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken; // apollo/index 의 useEffect .then() 에 들어감
  } catch (error) {
    console.log(error.message);
  }
}

// graphql client를 사용하지 않고 axios를 사용해 백엔드로 요청하는 방법
// axios.post("https://backend06.codebootcamp.co.kr/graphql", {
//   query: `
//   mutation restoreAccessToken {
//     restoreAccessToken {
//       accessToken
//     }
//   }
// `
// })
