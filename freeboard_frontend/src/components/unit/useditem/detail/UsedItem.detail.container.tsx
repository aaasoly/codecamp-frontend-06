import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { userInfo } from "os";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { string } from "yup";
import { FETCH_USER_LOGGED_IN } from "../../../../commons/login/Login.queries";
import { UserInfoState } from "../../../../commons/store";
import UsedItemDetailUI from "./UsedItem.detail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./UsedItem.detail.queries";

export default function UsedItemDetail() {
  const [userInfo, setUserInfo] = useRecoilState(UserInfoState);
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  const { data: logindata } = useQuery(FETCH_USER_LOGGED_IN);
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  // const [isLogin, setIsLogin] = useState(false);
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

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("상품이 삭제되었습니다.");
      router.push("/market");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickPick = () => {
    toggleUseditemPick({
      variables: { useditemId: String(router.query.useditemId) },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: String(router.query.useditemId) },
        },
      ],
      // optimisticResponse: {
      //   toggleUseditemPick: (data?.fetchUseditem.pickedCount || 0) + 1,
      // },
      // update(cache, { data }) {
      //   cache.writeQuery({
      //     query: FETCH_USED_ITEM,
      //     variables: { useditemId: String(router.query.useditemId) },
      //     data: {
      //       fetchUseditem: {
      //         _id: String(router.query.useditemId),
      //         __typename: "Useditem",
      //         pickedCount: data.fetchUseditem,
      //       },
      //     },
      //   });
      // },
    });
  };

  const onClickBuying = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.useditemId) },
      });
      alert("구매에 성공했습니다");
      router.push("/market");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UsedItemDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      // isLogin={isLogin}
      sellerId={sellerId}
      myId={myId}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
      onClickPick={onClickPick}
      onClickBuying={onClickBuying}
    />
  );
}
