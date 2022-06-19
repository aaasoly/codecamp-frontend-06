import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/Login.queries";
import { basketItemState } from "../../../commons/store";
import * as MyPage from "./mypage.styles";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MyPageUI() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [basketItem, setBasketItem] = useRecoilState(basketItemState);

  const router = useRouter();

  const menuList = [
    { id: 1, name: "myItem", path: "/mypage/myitem" },
    { id: 2, name: "myPay", path: "/mypage/myPayment" },
    { id: 3, name: "myProfile", path: "/mypage/myprofile" },
  ];

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
