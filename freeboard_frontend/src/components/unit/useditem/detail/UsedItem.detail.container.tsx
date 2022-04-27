import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";
import UsedItemDetailUI from "./UsedItem.detail.presenter";
import { FETCH_USED_ITEM } from "./UsedItem.detail.queries";

export default function UsedItemDetail() {
  const router = useRouter();
  // const [adress, setAddress] = useState();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  const { data: logindata } = useQuery(FETCH_USER_LOGGED_IN);

  const [isLogin, setIsLogin] = useState(false);

  console.log(
    data?.fetchUseditem.seller._id === logindata?.fetchUserLoggedIn._id
  );

  useEffect(() => {
    if (data?.fetchUseditem.seller._id === logindata?.fetchUserLoggedIn._id) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const onClickMoveToList = () => {
    router.push("/market");
  };

  return (
    <UsedItemDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      isLogin={isLogin}
    />
  );
}
