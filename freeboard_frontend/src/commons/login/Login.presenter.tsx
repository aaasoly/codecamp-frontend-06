import * as S from "./Login.styles";
import { ILoginPageUIProps } from "./Login.types";

export default function LoginPageUI(props: ILoginPageUIProps) {
  return (
    <S.Wrapper>
      <S.Form onSubmit={props.handleSubmit(props.onClickLogin)}>
        <S.WrapperHeader>로그인</S.WrapperHeader>
        <S.LoginInput
          type="text"
          placeholder="이메일"
          {...props.register("email")}
        />
        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
        <S.LoginInput
          type="password"
          placeholder="비밀번호"
          {...props.register("password")}
        />
        <S.ErrorMessage>
          {props.formState.errors.password?.message}
        </S.ErrorMessage>
        <S.LoginButton>로그인</S.LoginButton>
      </S.Form>
      <S.WrapperFooter>
        <S.SignupQuestion>계정이 없으신가요?</S.SignupQuestion>
        <S.SignUpBtn onClick={props.onClickMoveToSignup}>회원가입</S.SignUpBtn>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
