import InfiniteScroll from "react-infinite-scroller";
import UsedItemListUIItem from "./UsedItem.list.presenterItem";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { todayItemState } from "../../../../commons/store";
import { useRouter } from "next/router";
import { device } from "../../../../commons/responsive/breakPoint";
import { IUsedItemListUIProps } from "./Useditem.list.types";

const Wrapper = styled.div`
  width: 160rem;
  @media ${device.laptop} {
    width: 120rem;
  }
  @media ${device.tablet} {
    width: 500px;
  }
`;

const WrapperTop = styled.div`
  display: flex;
  width: 135rem;
  height: 47.3rem;
`;
const WrapperBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;
const WrapperRight = styled.div``;

const WrapperBottom = styled.div`
  width: 100%;
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
  @media ${device.tablet} {
    display: none;
  }
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
  :hover {
    background-color: #31588a;
    color: #feffe0;
    border: 1px solid #31588a;
    cursor: pointer;
  }
  transition-duration: 0.3s;
`;

export default function UsedItemListUI(props: IUsedItemListUIProps) {
  // const [todayBasketState] = useRecoilState(myTodayBasket);
  const [todayItem, setTodayItem] = useRecoilState(todayItemState);

  const router = useRouter();

  // 오늘 본 상품 목록 뿌리기
  useEffect(() => {
    const today = JSON.parse(localStorage.getItem(props.todayWatched) || "[]");
    const threeToday = today.slice(0, 3);
    setTodayItem(threeToday);
  }, []);

  const onClickMoveTodayDetail = (event: any) => {
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
      <WrapperBody>
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

        <WrapperRight>
          <TodayView>
            오늘 본 상품
            {/* <Today> */}
            {todayItem.map((el: any) => (
              <TodayItem
                key={el._id}
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                onClick={onClickMoveTodayDetail}
                id={el._id}
              />
            ))}
            {/* </Today> */}
          </TodayView>
        </WrapperRight>
      </WrapperBody>
      <WrapperBottom>
        <CreateButton onClick={props.onClickMoveToWrite}>
          상품 등록
        </CreateButton>
      </WrapperBottom>
    </Wrapper>
  );
}
