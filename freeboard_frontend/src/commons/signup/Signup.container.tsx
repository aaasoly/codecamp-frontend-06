import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import SignupPageUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const EmailRegex = /^\w+@\w+\.\w+$/;
  const PasswordRegex = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignup = async () => {
    if (!EmailRegex.test(email))
      setEmailError("이메일 형식이 올바르지 않습니다.");

    if (!PasswordRegex.test(password))
      setPasswordError(
        "비밀번호는 하나 이상의 숫자, 문자 및 특수문자를 포함해야 합니다."
      );
    if (name && email && password) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              name,
              email,
              password,
            },
          },
        });
        console.log(result);
        router.push("/login");
        alert("회원가입을 축하합니다!");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("회원가입에 필요한 정보를 모두 입력해주세요.");
    }
  };
  return (
    <SignupPageUI
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailError={emailError}
      passwordError={passwordError}
      onClickSignup={onClickSignup}
    />
  );
}
