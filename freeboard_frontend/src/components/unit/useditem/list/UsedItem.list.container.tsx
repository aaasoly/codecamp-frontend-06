import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemListUI from "./UsedItem.list.presenter";
import { FETCH_USED_ITEMS } from "./UsedItem.list.queries";

export default function UsedItemList() {
  const { data } = useQuery(FETCH_USED_ITEMS);

  console.log(data);

  const router = useRouter();

  const onClickMoveToDetail = (event) => {
    router.push(`/market/${event.currentTarget.id}`);
  };

  return (
    <UsedItemListUI data={data} onClickMoveToDetail={onClickMoveToDetail} />
  );
}
