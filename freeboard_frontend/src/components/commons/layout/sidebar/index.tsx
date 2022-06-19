import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRef, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";

const SideBar = styled.div`
  width: 290px;
  height: 900px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 5px 1px 8px 0 rgb(0 0 0 / 6%);
`;

const UserDiv = styled.div`
  width: 290px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const UserPicture = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgb(29 34 53 / 8%);
  margin-bottom: 10px;
`;

const UserName = styled.span`
  font-weight: 700;
  margin-bottom: 8px;
`;

const UserPoint = styled.span`
  font-size: 14px;
  padding: 3px 10px;
  border-radius: 30px;
  background-color: aliceblue;
`;

const MyPage = styled.span`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 20px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  margin-left: 10px;
`;

const MenuTitle = styled.span`
  font-weight: 600;
  margin-bottom: 10px;
`;

const MenuItem = styled.li`
  padding: 0;
  margin-bottom: 10px;
`;

const MyMarket = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyPoint = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Sidebar() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <SideBar>
      <UserDiv>
        <UserPicture src={data?.fetchUserLoggedIn.picture} />
        <UserName>{data?.fetchUserLoggedIn.name}</UserName>
        <UserPoint>
          보유 포인트 {data?.fetchUserLoggedIn.userPoint.amount} P
        </UserPoint>
      </UserDiv>

      <MenuDiv>
        <MyPage>
          <Link href="/mypage">
            <a>마이 페이지</a>
          </Link>
        </MyPage>

        <MyMarket>
          <MenuTitle>내 장터</MenuTitle>
          <MenuList>
            <MenuItem>
              <Link href="/mypage/myitem">
                <a>내 상품 조회</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/mypage/mypick">
                <a>찜 상품 조회</a>
              </Link>
            </MenuItem>
          </MenuList>
        </MyMarket>

        <MyPoint>
          <MenuTitle>내 결제</MenuTitle>
          <MenuList>
            <MenuItem>
              <Link href="/mypage/myPayment">
                <a>포인트 조회</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/mypage/myPayment/bought">
                <a>구매 내역</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/mypage/myPayment/sold">
                <a>판매 내역</a>
              </Link>
            </MenuItem>
          </MenuList>
        </MyPoint>

        <MyProfile>
          <MenuTitle>내 프로필</MenuTitle>
          <MenuList>
            <MenuItem>
              <Link href="/mypage/myprofile">
                <a>프로필 변경</a>
              </Link>
            </MenuItem>
          </MenuList>
        </MyProfile>
      </MenuDiv>
    </SideBar>
  );
}
