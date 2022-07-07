import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { accessTokenState, restoreAccessTokenLoadable } from "../store";

// @ts-ignore
// eslint-disable-next-line react/display-name
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다");
          router.push("/login");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
