import { useQuery } from "@apollo/client";
import { Children, useEffect } from "react";
import { useRecoilState } from "recoil";
import PaymentLoading from "../../../commons/loading";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/Login.queries";
import { basketItemState } from "../../../commons/store";
import * as MyPage from "./mypage.styles";
import MyMarket from "./myMarket/myMarket.container";
import { Outlet, Link, Route, Routes } from "react-router-dom";

export default function MyPageUI() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [basketItem, setBasketItem] = useRecoilState(basketItemState);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    setBasketItem(baskets);
  }, []);

  console.log(basketItem);

  return (
    // <div>
    //   <PaymentLoading />
    //   <div>충전된 포인트: {data?.fetchUserLoggedIn.userPoint.amount}</div>

    //   <BasketBox>
    //     {basketItem.map((el, idx) => (
    //       <div key={idx}>
    //         <Colunm>{el.name}</Colunm>
    //         <Colunm>{el.price}</Colunm>
    //         <Colunm>{el.seller.name}</Colunm>
    //       </div>
    //     ))}
    //   </BasketBox>
    // </div>
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
              <MyPage.MenuItem>
                <Link to="/">올린 상품</Link>
              </MyPage.MenuItem>
              <MyPage.MenuItem>찜</MyPage.MenuItem>
            </MyPage.MenuList>
          </MyPage.MyMarket>

          <MyPage.MyPoint>
            <MyPage.MenuTitle>내 포인트</MyPage.MenuTitle>
            <MyPage.MenuList>
              <MyPage.MenuItem>포인트 조회</MyPage.MenuItem>
              <MyPage.MenuItem>결제 내역</MyPage.MenuItem>
              <MyPage.MenuItem>판매 내역</MyPage.MenuItem>
            </MyPage.MenuList>
          </MyPage.MyPoint>

          <MyPage.MyProfile>
            <MyPage.MenuTitle>내 프로필</MyPage.MenuTitle>
          </MyPage.MyProfile>
        </MyPage.MenuDiv>
      </MyPage.SideBar>

      <MyPage.Main></MyPage.Main>
    </MyPage.Wrapper>
  );
}
