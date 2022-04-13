import { ChangeEvent, useState } from "react";
import SignupPageUI from "./Signup.presenter";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const EmailRegex = /^\w+@\w+\.\w+$/;
  const PasswordRegex = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickSignup = () => {
    if (!EmailRegex.test(email))
      setEmailError("이메일 형식이 올바르지 않습니다.");

    if (!PasswordRegex.test(password))
      setPasswordError(
        "비밀번호는 하나 이상의 숫자, 문자 및 특수문자를 포함해야 합니다."
      );
  };
  return (
    <SignupPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailError={emailError}
      passwordError={passwordError}
      onClickSignup={onClickSignup}
    />
  );
}
