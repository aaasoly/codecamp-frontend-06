import "antd/dist/antd.css";
// import "../styles/globals.css";

import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Head> 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적임(04/22)
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1914a440888b0940d807c8d489453ba2"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp; // function 앞에 export default 쓰고 이부분은 지워도 됨. 똑같은 것
