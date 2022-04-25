import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import UsedItemListUI from "./UsedItem.list.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./UsedItem.list.queries";

export default function UsedItemList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: ofTheBest } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const router = useRouter();

  const onClickMoveToDetail = (event) => {
    router.push(`/market/${event.currentTarget.id}`);
  };

  const onClickMoveToWrite = (event) => {
    router.push("/market/new");
  };

  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <UsedItemListUI
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      onLoadMore={onLoadMore}
      onClickMoveToWrite={onClickMoveToWrite}
      ofTheBest={ofTheBest}
    />
  );
}
