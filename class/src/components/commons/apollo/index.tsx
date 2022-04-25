import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState, UserInfoState } from "../../../commons/store";

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);

  // 더이상 지원되지 않음
  // if(process.browser){

  // } else {

  // }

  // 2. 두번째 방법
  if (typeof window !== "undefined") {
    // 브라우저라면
    console.log("여기는 브라우저");

    //   const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(mylocalstorageAccessToken || "");
  } else {
    // 프론트엔드 서버라면
    console.log("여기는 프론트엔드(yarn dev)");
  }

  // 3. 세번째 방법(새고시 날아가기 때문에 글로벌스테이트에 다시 넣어주는 행위)
  useEffect(() => {
    // 옛날 방식
    // const accessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(accessToken || "");
    // setUserInfo(userInfo);

    // accessToken 재발급 받아서 state에 넣어주기
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []); // 새로고침 할 때 한 번만 실행

  // 여기가 프리렌더링시 문제되는 코드!!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // ////////////////////////////////////////////////////////////////////

  //
  //
  // 22.04.25 refreshToken과 onError
  // libraries - getAccessToken과 함께 볼 것
  // onError()에서 실행 될 callback 함수로 작성
  // 구조분해할당으로 graphQLErrors, operation(방금 실패한 쿼리), forward(전송)
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      // graphql은 api 한 번에 여러 요청을 할 수 있기 때문에 에러도 여러개가 들어온다
      for (const err of graphQLErrors) {
        // 각 에러마다 반복문 실행
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 에러의 실행 코드 일치 확인
          // 2-1. refreshToken 으로 accessToken 재발급 받기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken을 global state에 저장
            setAccessToken(newAccessToken);

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기
            // getContext()를 통해 api 에서 등록됐던 부분을 가져올 수 있음
            // setContext()를 통해 api 에 등록된 옵션을 바꿀 수 있음
            operation.setContext({
              headers: {
                ...operation.getContext().headers, // headers 에 저장된 내용들 spread로 가져온 후
                Authorization: `Bearer ${newAccessToken}`, // authorization만 새로운 데이터로 바꾸기
              },
            });

            // 3-2. 변경된 operation 재요청하기
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql", // endpoint
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // 중요한 정보 포함
  }); // uploadLink 변수를 선언해서 apolloclient에 연결

  // useQuery, useMutation 등을 사용하기 위한 apolloClient 셋팅
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    // uri: "http://backend06.codebootcamp.co.kr/graphql", // Day14부터
    // "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;

  // children 은 _app.tsx 의
  // <Global styles={globalStyles} />
  //       <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  // 를 말한다
}
