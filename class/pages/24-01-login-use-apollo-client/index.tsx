import { gql, useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, UserInfoState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(UserInfoState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();

  const client = useApolloClient();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인 하기
    const result = await loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 2. 유저정보 받아오기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }, // 설정을 옵션 형태로 입력하고 싶을 때 사용
    });
    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 3. 글로벌 스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem("accessToken", accessToken);
    // localStorage.setItem("userInfo", userInfo); // [Object Object] > 객체 저장이 안됨
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    // 4. 로그인 성공 페이지로 이동하기
    alert("로그인에 성공하였습니다!!");
    router.push("/24-02-login-use-apollo-client-success");
  };

  return (
    <div>
      이메일: <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인 하기</button>
    </div>
  );
}
