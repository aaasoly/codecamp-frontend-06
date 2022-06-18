import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import Link from "next/link";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";

const SideBar = styled.div`
  width: 290px;
  height: 900px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bebebe;
`;

const UserDiv = styled.div`
  width: 290px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #bebebe;
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

const UserPicture = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1px solid #fff;
`;

const UserName = styled.span``;

const UserPoint = styled.span``;

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
        <UserPicture></UserPicture>
        <UserName>{data?.fetchUserLoggedIn.name}</UserName>
        <UserPoint>{data?.fetchUserLoggedIn.userPoint.amount} P</UserPoint>
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
                <a>비밀번호 변경</a>
              </Link>
            </MenuItem>
          </MenuList>
        </MyProfile>
      </MenuDiv>
    </SideBar>
  );
}
