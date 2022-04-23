import * as S from "./Login.styles";

export default function LoginPageUI(props) {
  return (
    <S.Wrapper>
      <S.Wrapper__Header>Welcome!</S.Wrapper__Header>
      <S.LoginInput
        type="text"
        placeholder="이메일을 입력하세요"
        onChange={props.onChangeEmail}
      />
      <S.LoginInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={props.onChangePassword}
      />
      <S.MaintainLogin>로그인 정보 기억하기</S.MaintainLogin>
      <S.LoginButton onClick={props.onClickLogin}>Log In</S.LoginButton>

      {/* <S.HorizonLine></S.HorizonLine> */}

      <S.Wrapper__Footer>
        <S.FooterMenu>이메일 찾기</S.FooterMenu>
        <S.VerticalLine></S.VerticalLine>
        <S.FooterMenu>비밀번호 찾기</S.FooterMenu>
        <S.VerticalLine></S.VerticalLine>
        <S.FooterMenu onClick={props.onClickMoveToSignup}>
          회원가입
        </S.FooterMenu>
      </S.Wrapper__Footer>
    </S.Wrapper>
  );
}
