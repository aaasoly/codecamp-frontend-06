import InfiniteScroll from "react-infinite-scroller";
import UsedItemListUIItem from "./UsedItem.list.presenterItem";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import {
  myTodayBasket,
  recentItemState,
  todayItemState,
} from "../../../../commons/store";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: 1600px;
`;

const Wrapper__Top = styled.div`
  display: flex;
  width: 1350px;
  height: 473px;
`;
const Wrapper__Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const Wrapper__Right = styled.div``;

const Wrapper__Bottom = styled.div`
  width: 1350px;
  display: flex;
  justify-content: flex-end;
`;

const TodayView = styled.div`
  width: 196px;
  height: 505px;
  border: 1px solid #bdbdbd;
  position: static;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// const Today = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const TodayItem = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
  background-color: #000;
`;

const CreateButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: #fff;
`;

export default function UsedItemListUI(props) {
  // const [todayBasketState] = useRecoilState(myTodayBasket);
  const [todayItem, setTodayItem] = useRecoilState(todayItemState);

  const router = useRouter();

  // 오늘 본 상품 목록 뿌리기
  useEffect(() => {
    const today = JSON.parse(localStorage.getItem(props.todayWatched) || "[]");
    const threeToday = today.slice(0, 3);
    setTodayItem(threeToday);
  }, []);

  const onClickMoveToDetail = (event) => {
    router.push(`market/${event.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <Wrapper__Top>
        인기 상품
        {/* <Today> */}
        {/* {props.ofTheBest?.fetchUseditemsOfTheBest.map((el) => (
            <div>{props.el._id}</div>
          ))} */}
        {/* </Today> */}
      </Wrapper__Top>
      <Wrapper__Body>
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
                onClickMoveToDetail={props.onClickMoveToDetail(el)}
              />
            ))}
          </InfiniteScroll>
        </div>

        <Wrapper__Right>
          <TodayView>
            오늘 본 상품
            {/* <Today> */}
            {todayItem.map((el) => (
              <TodayItem
                key={el._id}
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onClick={onClickMoveToDetail}
                id={el._id}
              />
            ))}
            {/* </Today> */}
          </TodayView>
        </Wrapper__Right>
      </Wrapper__Body>
      <Wrapper__Bottom>
        <CreateButton onClick={props.onClickMoveToWrite}>새글등록</CreateButton>
      </Wrapper__Bottom>
    </Wrapper>
  );
}
