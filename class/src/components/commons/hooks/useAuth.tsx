import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// useRouter와 useEffect를 쓰고 있으므로 useAuth 로 네이밍
export function useAuth() {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  // 권한분기 로직  추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      router.push("/23-04-login-check");
    }
  }, []);

  // return {
  //   // isLoading: isLoading - key: value 값이 같으므로
  //   // short hand porperty
  //   isLoading,
  // };
}
