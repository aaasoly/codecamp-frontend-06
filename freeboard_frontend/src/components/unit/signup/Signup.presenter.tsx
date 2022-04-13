import * as S from "./Signup.styles";

export default function SignupPageUI(props) {
  return (
    <S.Wrapper>
      <S.Wrapper__Header></S.Wrapper__Header>

      <S.SignupLabel>이름</S.SignupLabel>
      <S.SignupInput type="text" placeholder="이름을 입력하세요" />
      <S.SignupLabel>이메일</S.SignupLabel>
      <S.SignupInput
        type="text"
        placeholder="이메일을 입력하세요"
        onChange={props.onChangeEmail}
      />
      {props.emailError}
      <S.SignupLabel>비밀번호</S.SignupLabel>
      <S.SignupInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={props.onChangePassword}
      />
      {props.passwordError}
      <S.SignupLabel>비밀번호 확인</S.SignupLabel>
      <S.SignupInput type="password" placeholder="비밀번호를 입력하세요" />

      <S.SignupButton onClick={props.onClickSignup}>회원가입</S.SignupButton>
    </S.Wrapper>
  );
}
