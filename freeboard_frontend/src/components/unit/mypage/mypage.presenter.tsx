import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/Login.queries";
import { basketItemState } from "../../../commons/store";
import * as MyPage from "./mypage.styles";
import Link from "next/link";
import PaymentLoading from "../../../commons/loading";
import Sidebar from "../../commons/layout/sidebar";

export default function MyPageUI() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [basketItem, setBasketItem] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItem(baskets);
  }, []);

  console.log(basketItem);

  return (
    <MyPage.Wrapper>
      <MyPage.Main>
        <MyPage.MainTop>
          {data?.fetchUserLoggedIn.name}님 환영합니다!
        </MyPage.MainTop>

        <MyPage.MainBottom>
          <MyPage.MenuBox>포인트 충전</MyPage.MenuBox>
          <MyPage.MenuBox>
            <Link href="/mypage/myitem">
              <a>내 장터</a>
            </Link>
          </MyPage.MenuBox>
          <MyPage.MenuBox>
            <Link href="/mypage/myPayment">
              <a>내 결제</a>
            </Link>
          </MyPage.MenuBox>
          <MyPage.MenuBox>
            <Link href="/mypage/myprofile">
              <a>내 프로필</a>
            </Link>
          </MyPage.MenuBox>
        </MyPage.MainBottom>
      </MyPage.Main>
    </MyPage.Wrapper>
  );
}
