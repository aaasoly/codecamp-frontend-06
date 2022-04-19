import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPageUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  const [logInUser] = useMutation(LOGIN_USER);

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
      const accessToken = result.data.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.getItem("accessToken", accessToken);
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
