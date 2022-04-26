import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UsedItemListUI from "./UsedItem.list.presenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./UsedItem.list.queries";

export default function UsedItemList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);
  const { data: ofTheBest } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);

  const router = useRouter();

  const [isSaw, setIsSaw] = useState(false);
  const [today, setToday] = useState([]);

  // 오늘 본 상품
  const wasSaw = () => {
    const newdate = new Date();
    const yyyy = newdate.getFullYear();
    const mm = newdate.getMonth() + 1;
    const dd = newdate.getDate();
    return `${yyyy}-${mm}-${dd}`;
  };

  const todaySaw = wasSaw();

  useEffect(() => {
    setToday(JSON.parse(localStorage.getItem(todaySaw) || "[]"));
  }, []);

  // const onClickItem = (el) => () => {
  //   setIsSaw(true);

  //   const todaySaw = wasSaw();

  //   const basket = JSON.parse(localStorage.getItem(todaySaw) || "[]");
  //   const temp = basket.filter((basketEl) => basketEl._id === el._id);

  //   const { __typename, ...newEl } = el;
  //   basket.push(newEl);
  //   localStorage.setItem(todaySaw, JSON.stringify(baskets));
  //   const a = JSON.parse(localStorage.getItem(todaySaw) || "[]");
  //   setToday(a);
  // };

  const onClickMoveToWrite = () => {
    router.push("/market/new");
  };

  const onClickMoveToDetail = (event) => {
    router.push(`/market/${event.currentTarget.id}`);

    // 오늘 본 아이템
    // setIsSaw(true);

    // const todaySaw = wasSaw();

    // const baskets = JSON.parse(localStorage.getItem(todaySaw) || "[]");

    // const { __typename, ...newEl } = event.currentTarget.value;
    // baskets.push(newEl);
    // localStorage.setItem(todaySaw, JSON.stringify(baskets));
    // const a = JSON.parse(localStorage.getItem(todaySaw) || "[]");
    // setToday(a);
  };

  // 무한스크롤
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
      today={today}
    />
  );
}
