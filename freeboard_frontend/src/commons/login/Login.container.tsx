import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, UserInfoState } from "../store";
import LoginPageUI from "./Login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./Login.queries";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IFormValues } from "./Login.types";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해야 합니다.")
    .max(15, "비밀번호는 최대 15자리를 넘을 수 없습니다.")
    .required("비밀번호를 입력해주세요."),
});

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(UserInfoState);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const router = useRouter();
  const [logInUser] = useMutation(LOGIN_USER);

  const client = useApolloClient();

  const onClickLogin = async (data: IFormValues) => {
    try {
      const result = await logInUser({
        variables: {
          email: data.email,
          password: data.password,
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
      onClickLogin={onClickLogin}
      onClickMoveToSignup={onClickMoveToSignup}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
