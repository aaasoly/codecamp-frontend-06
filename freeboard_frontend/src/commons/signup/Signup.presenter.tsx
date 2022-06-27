import * as S from "./Signup.styles";
import { ISignUpPageUIProps } from "./Signup.types";

export default function SignupPageUI(props: ISignUpPageUIProps) {
  return (
    <S.Wrapper>
      <S.WrapperHeader>회원가입</S.WrapperHeader>
      <S.Form onSubmit={props.handleSubmit(props.onClickSignup)}>
        <S.SignupInput
          type="text"
          placeholder="이름"
          {...props.register("name")}
        />
        <S.ErrorMessage>{props.formState.errors.name?.message}</S.ErrorMessage>
        <S.SignupInput
          type="text"
          placeholder="이메일"
          {...props.register("email")}
        />
        <S.ErrorMessage>{props.formState.errors.email?.message}</S.ErrorMessage>
        <S.SignupInput
          type="password"
          placeholder="비밀번호"
          {...props.register("password")}
        />
        <S.ErrorMessage>
          {props.formState.errors.password?.message}
        </S.ErrorMessage>
        <S.SignupInput
          type="password"
          placeholder="비밀번호 확인"
          {...props.register("passwordCheck")}
        />
        <S.ErrorMessage>
          {props.formState.errors.passwordCheck?.message}
        </S.ErrorMessage>
        <S.SignupButton>회원가입</S.SignupButton>
      </S.Form>
      <S.WrapperFooter>
        <S.SignupQuestion>이미 계정이 있신가요?</S.SignupQuestion>
        <S.SignUpBtn onClick={props.onClickMoveToLogin}>로그인</S.SignUpBtn>
      </S.WrapperFooter>
    </S.Wrapper>
  );
}
