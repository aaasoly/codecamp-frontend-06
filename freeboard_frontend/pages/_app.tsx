import "antd/dist/antd.css";
import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app"; // Component, pageProps
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAgFfwVeLPliwNYZZ-1xDtQza5vyrPTPYQ",
  authDomain: "mypage0406.firebaseapp.com",
  projectId: "mypage0406",
  storageBucket: "mypage0406.appspot.com",
  messagingSenderId: "578245303199",
  appId: "1:578245303199:web:ec831e72bf4e3b40a7fbaa",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// next.js 에서 지원하는 prpos
function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  }); // uploadLink 변수를 선언해서 apolloclient에 연결

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // uri: "http://backend06.codebootcamp.co.kr/graphql", // Day14부터
    // "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp; // function 앞에 export default 쓰고 이부분은 지워도 됨. 똑같은 것
