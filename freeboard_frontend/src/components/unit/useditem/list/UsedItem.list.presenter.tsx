import InfiniteScroll from "react-infinite-scroller";
import UsedItemListUIItem from "./UsedItem.list.presenterItem";
import { v4 as uuidv4 } from "uuid";

export default function UsedItemListUI(props) {
  return (
    <div>
      <div style={{ height: "1004px", overflow: "auto" }}>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {props.data?.fetchUseditems.map((el) => (
            <UsedItemListUIItem
              key={uuidv4()}
              el={el}
              onClickMoveToDetail={props.onClickMoveToDetail}
            />
          ))}
        </InfiniteScroll>
      </div>
      <button onClick={props.onClickMoveToWrite}>새글등록</button>
    </div>
  );
}
