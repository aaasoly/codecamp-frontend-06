import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS_I_SOLD } from "./myMarket.queries";
import * as MyItem from "./myMarket.styles";
import { getDate } from "../../../../commons/libraries/utils";
import Sidebar from "../../../commons/layout/sidebar";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";

export default function MyItemPage() {
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USED_ITEMS_I_SOLD);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchUseditemsISold.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemsISold)
          return { fetchUseditemsISold: [...prev.fetchUseditemsISold] };

        return {
          fetchUseditemsISold: [
            ...prev.fetchUseditemsISold,
            ...fetchMoreResult.fetchUseditemsISold,
          ],
        };
      },
    });
  };

  console.log(data);
  return (
    <MyItem.Wrapper>
      <Sidebar />
      <MyItem.Main>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true}
          useWindow={false}
        >
          {data?.fetchUseditemsISold.map((el) => (
            <MyItem.ItemDiv key={uuidv4()}>
              <MyItem.ItemPicture
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
              />
              <MyItem.ItemInfo>
                <MyItem.ItemName>{el.name}</MyItem.ItemName>
                <MyItem.ItemPrice>{el.price} 원</MyItem.ItemPrice>
              </MyItem.ItemInfo>
              <MyItem.CreatedAt>{getDate(el.createdAt)}</MyItem.CreatedAt>
            </MyItem.ItemDiv>
          ))}
        </InfiniteScroll>
      </MyItem.Main>
    </MyItem.Wrapper>
  );
}
