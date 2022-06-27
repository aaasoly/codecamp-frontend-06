import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/Login.queries";
import { basketItemState } from "../../../commons/store";
import * as MyPage from "./mypage.styles";
import Link from "next/link";

export default function MyPageUI() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [basketItem, setBasketItem] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItem(baskets);
  }, []);

  return (
    <MyPage.Wrapper>
      <MyPage.Main>
        <MyPage.MainTop>
          {data?.fetchUserLoggedIn.profile}
          {data?.fetchUserLoggedIn.name}님 환영합니다!
        </MyPage.MainTop>

        <MyPage.MainBottom>
          <MyPage.MenuBox>포인트 충전</MyPage.MenuBox>

          <Link href="/mypage/myitem">
            <a>
              <MyPage.MenuBox>내 장터</MyPage.MenuBox>
            </a>
          </Link>

          <Link href="/mypage/myPayment">
            <a>
              <MyPage.MenuBox>내 결제</MyPage.MenuBox>
            </a>
          </Link>

          <Link href="/mypage/myprofile">
            <a>
              <MyPage.MenuBox>내 프로필</MyPage.MenuBox>
            </a>
          </Link>
        </MyPage.MainBottom>
      </MyPage.Main>
    </MyPage.Wrapper>
  );
}
