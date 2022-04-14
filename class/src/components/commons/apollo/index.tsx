import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
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
    const accessToken = localStorage.getItem("accessToken");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setAccessToken(accessToken || "");
    setUserInfo(userInfo);
  }, []);

  // 여기가 프리렌더링시 문제되는 코드!!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  }); // uploadLink 변수를 선언해서 apolloclient에 연결

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
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
