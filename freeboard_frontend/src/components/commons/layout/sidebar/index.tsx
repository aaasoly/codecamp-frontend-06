import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRef, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";
import { device } from "../../../../commons/responsive/breakPoint";

const SideBar = styled.div`
  width: 29rem;
  height: 900px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 5px 1px 8px 0 rgb(0 0 0 / 6%);
  @media ${device.tablet} {
    height: 500px;
  }
`;

const UserDiv = styled.div`
  width: 29rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MenuDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  /* @media ${device.laptop} {
    padding-top: 10px;
  } */
`;

const UserPicture = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  box-shadow: 0 3px 6px 0 rgb(29 34 53 / 8%);
  margin-bottom: 10px;
`;

const UserName = styled.span`
  font-weight: 700;
  margin-bottom: 8px;
`;

const UserPoint = styled.span`
  font-size: 1.4rem;
  padding: 3px 10px;
  border-radius: 30px;
  background-color: #31588a;
  color: #feffe0;
  margin-bottom: 8px;
`;

const ChargePoint = styled.div`
  font-size: 1.6rem;
  > a:hover {
    color: #bdbdbd;
  }
`;

const MyPage = styled.span`
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 3rem;
  margin-left: 10px;
`;

const MenuTitle = styled.span`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const MenuItem = styled.li`
  padding: 0;
  margin-bottom: 1rem;
  > a:hover {
    color: #bdbdbd;
  }
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
        <ChargePoint>
          <Link href="/myPage/myPoint">
            <a>포인트 충전</a>
          </Link>
        </ChargePoint>
      </UserDiv>

      <MenuDiv>
        <MyPage>마이페이지</MyPage>

        <MyMarket>
          <MenuTitle>내 장터</MenuTitle>
          <MenuList>
            <MenuItem>
              <Link href="/myPage/myItem">
                <a>내 상품 조회</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/myPage/myPick">
                <a>장바구니</a>
              </Link>
            </MenuItem>
          </MenuList>
        </MyMarket>

        <MyPoint>
          <MenuTitle>내 결제</MenuTitle>
          <MenuList>
            <MenuItem>
              <Link href="/myPage/myPayment">
                <a>포인트 조회</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/myPage/myPayment/bought">
                <a>구매 내역</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/myPage/myPayment/sold">
                <a>판매 내역</a>
              </Link>
            </MenuItem>
          </MenuList>
        </MyPoint>

        <MyProfile>
          <MenuTitle>내 프로필</MenuTitle>
          <MenuList>
            <MenuItem>
              <Link href="/myPage/myProfile">
                <a>프로필 변경</a>
              </Link>
            </MenuItem>
          </MenuList>
        </MyProfile>
      </MenuDiv>
    </SideBar>
  );
}
