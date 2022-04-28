import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { userInfo } from "os";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";
import { UserInfoState } from "../../../../commons/store";
import UsedItemDetailUI from "./UsedItem.detail.presenter";
import { FETCH_USED_ITEM } from "./UsedItem.detail.queries";

export default function UsedItemDetail() {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  const { data: logindata } = useQuery(FETCH_USER_LOGGED_IN);

  const [isLogin, setIsLogin] = useState(false);

  // console.log(
  //   data?.fetchUseditem.seller._id === logindata?.fetchUserLoggedIn._id
  // );

  console.log(data);

  // console.log(data?.fetchUseditem.seller._id);
  // console.log(logindata?.fetchUserLoggedIn._id);

  const sellerId = data?.fetchUseditem.seller._id;
  const myId = logindata?.fetchUserLoggedIn._id;

  // useEffect(() => {
  //   if (sellerId !== myId) {
  //     setIsLogin(false);
  //   } else if (sellerId === myId) {
  //     setIsLogin(true);
  //   }
  // }, []);

  const onClickMoveToList = () => {
    router.push("/market");
  };

  const onClickMoveToUpdate = () => {
    router.push(`/market/${router.query.useditemId}/edit`);
  };

  const onClickMoveToBuy = () => {
    console.log("구매하기로 이동");
  };

  return (
    <UsedItemDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      // isLogin={isLogin}
      sellerId={sellerId}
      myId={myId}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickMoveToBuy={onClickMoveToBuy}
    />
  );
}
