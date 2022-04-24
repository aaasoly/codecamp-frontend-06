import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import UsedItemDetailUI from "./UsedItem.detail.presenter";
import { FETCH_USED_ITEM } from "./UsedItem.detail.queries";

export default function UsedItemDetail() {
  const router = useRouter();
  // const [adress, setAddress] = useState();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });

  console.log(data);

  const onClickMoveToList = () => {
    router.push("/market");
  };

  return <UsedItemDetailUI data={data} onClickMoveToList={onClickMoveToList} />;
}
