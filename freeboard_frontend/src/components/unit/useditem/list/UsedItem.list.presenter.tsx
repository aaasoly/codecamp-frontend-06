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
  width: 160rem;
`;

const Wrapper__Top = styled.div`
  display: flex;
  width: 135rem;
  height: 47.3rem;
`;
const Wrapper__Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
const Wrapper__Right = styled.div``;

const Wrapper__Bottom = styled.div`
  width: 135rem;
  display: flex;
  justify-content: flex-end;
`;

const TodayView = styled.div`
  width: 19.6rem;
  height: 55rem;
  font-size: 1.4rem;
  font-weight: 700;
  border: 1px solid #bdbdbd;
  position: static;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
`;

const TodayItem = styled.img`
  width: 16rem;
  height: 16rem;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 1px solid #bebebe;
`;

const CreateButton = styled.button`
  width: 12.4rem;
  height: 5.2rem;
  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #bebebe;
  cursor: pointer;
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
      {/* <Wrapper__Top>
        인기 상품
        <Today>
        {props.ofTheBest?.fetchUseditemsOfTheBest.map((el) => (
            <div>{props.el._id}</div>
          ))}
        </Today>
      </Wrapper__Top> */}
      <Wrapper__Body>
        <div style={{ height: "100.4rem", overflow: "auto" }}>
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
        <CreateButton onClick={props.onClickMoveToWrite}>
          상품 등록
        </CreateButton>
      </Wrapper__Bottom>
    </Wrapper>
  );
}
