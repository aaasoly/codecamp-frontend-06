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

  console.log(basketItem);

  return (
    <MyPage.Wrapper>
      <MyPage.SideBar>
        <MyPage.UserDiv>
          <MyPage.UserPicture></MyPage.UserPicture>
          <MyPage.UserName>{data?.fetchUserLoggedIn.name}</MyPage.UserName>
          <MyPage.UserPoint>
            {data?.fetchUserLoggedIn.userPoint.amount} P
          </MyPage.UserPoint>
        </MyPage.UserDiv>

        <MyPage.MenuDiv>
          <MyPage.MyPage>마이 페이지</MyPage.MyPage>

          <MyPage.MyMarket>
            <MyPage.MenuTitle>내 장터</MyPage.MenuTitle>
            <MyPage.MenuList>
              <Link href="/mypage/myitem">
                <a>내 상품 조회</a>
              </Link>
              <Link href="/mypage/mypick">
                <a>찜 상품 조회</a>
              </Link>
            </MyPage.MenuList>
          </MyPage.MyMarket>

          <MyPage.MyPoint>
            <MyPage.MenuTitle>내 결제</MyPage.MenuTitle>
            <MyPage.MenuList>
              <MyPage.MenuItem>포인트 사용 내역</MyPage.MenuItem>
              <MyPage.MenuItem>구매 내역</MyPage.MenuItem>
              <MyPage.MenuItem>판매 내역</MyPage.MenuItem>
            </MyPage.MenuList>
          </MyPage.MyPoint>

          <MyPage.MyProfile>
            <Link href="/mypage/myprofile">
              <a>내 프로필</a>
            </Link>
          </MyPage.MyProfile>
        </MyPage.MenuDiv>
      </MyPage.SideBar>

      <MyPage.Main></MyPage.Main>
    </MyPage.Wrapper>
  );
}
