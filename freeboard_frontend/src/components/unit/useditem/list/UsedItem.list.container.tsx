import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { todayItemState } from "../../../../commons/store";
import UsedItemListUI from "./UsedItem.list.presenter";
import { FETCH_USED_ITEMS } from "./UsedItem.list.queries";

export default function UsedItemList() {
  const { data, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const router = useRouter();

  const [todayItem, setTodayItem] = useRecoilState(todayItemState);
  // const [, setTodayState] = useRecoilState(myTodayBasket);

  // const [isSaw, setIsSaw] = useState(false);
  // const [today, setToday] = useState([]);

  // 오늘 본 상품
  const myDate = () => {
    const newdate = new Date();
    const yyyy = newdate.getFullYear();
    const mm = newdate.getMonth() + 1;
    const dd = newdate.getDate();
    return `${yyyy}-${mm}-${dd}`;
  };

  // const todaySaw = wasSaw();

  // useEffect(() => {
  //   setToday(JSON.parse(localStorage.getItem(todaySaw) || "[]"));
  // }, []);

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

  const todayWatched = myDate();

  const onClickMoveToDetail = (el: any) => (event: any) => {
    router.push(`/market/${event.currentTarget.id}`);

    const today = JSON.parse(localStorage.getItem(todayWatched) || "[]");
    // const today = JSON.parse(localStorage.getItem("today") || "[]");

    const { __typename, ...newEl } = el;
    today.unshift(newEl);
    localStorage.setItem(todayWatched, JSON.stringify(today));
    // localStorage.setItem("today", JSON.stringify(today));
    const threeRecent = today.slice(0, 3);
    setTodayItem(threeRecent);

    // setTodayState((prev) => !prev);

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
      // today={today}
      todayWatched={todayWatched}
    />
  );
}
