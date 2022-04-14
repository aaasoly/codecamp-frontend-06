import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용 가능합니다");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);
  // 이렇게 작성할 경우 권한분기가 필요한 컴포넌트 마다마다 적어줘야한다.
  // 수정시 전부 다 찾아서 수정해야함.
  // 이를 해결하기 위해 HOC 를 사용한다

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!</div>;
}

export default withAuth(LoginSuccessPage);

//{withAuth(LoginSuccessPage)({...pageProps})}
// withAuth 의 component 에는 LoginSuccessPage 가 매개변수
// withAuth 의 props에는 ...pageProps 가 매개변수로 들어감
// withAuth 의 useEffect 실행 후 return <Component {...props}/> 실행 됨
