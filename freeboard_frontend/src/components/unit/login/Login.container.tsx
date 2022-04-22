import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, UserInfoState } from "../../../commons/store";
import LoginPageUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(UserInfoState);

  const router = useRouter();
  const [logInUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const result = await logInUser({
        variables: {
          email,
          password,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken);

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

      setUserInfo(userInfo);
      localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("userInfo", userInfo); // [Object Object] > 객체 저장이 안됨
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToSignup = () => {
    router.push("/login/signup");
  };

  return (
    <LoginPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
    />
  );
}
