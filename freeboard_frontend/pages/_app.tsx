import "antd/dist/antd.css";
import "../styles/globals.css";
import { AppProps } from "next/app"; // Component, pageProps
import Layout from "../src/components/commons/layout";
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";

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
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp; // function 앞에 export default 쓰고 이부분은 지워도 됨. 똑같은 것
