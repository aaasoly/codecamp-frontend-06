import InfiniteScroll from "react-infinite-scroller";
import UsedItemListUIItem from "./UsedItem.list.presenterItem";

export default function UsedItemListUI(props) {
  if (!props.data) return <div />;

  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditems.map((el) => (
        <UsedItemListUIItem key={el._id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
