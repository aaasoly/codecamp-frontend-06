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
  display: flex;
  justify-content: space-between;
  margin: 40px auto 0;
  @media ${device.laptop} {
    width: 105rem;
  }
  @media ${device.tablet} {
    width: 60rem;
    justify-content: center;
  }
`;

const WrapperTop = styled.div`
  display: flex;
  width: 135rem;
  height: 47.3rem;
`;

const WrapperBody = styled.div`
  width: 120rem;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  width: 130rem;
  height: 150rem;
  display: flex;
  margin-bottom: 4rem;
  overflow: auto;
  @media ${device.laptop} {
    width: 80rem;
  }
`;

const FlexWrap = styled.div`
  width: 100%;
  height: 150rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${device.tablet} {
    justify-content: center;
  }
`;

const WrapperRight = styled.div`
  width: 20rem;
`;

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
  border-radius: 10px;
`;

const CreateButton = styled.button`
  width: 124px;
  height: 52px;
  font-size: 14px;
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
        <Item>
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            <FlexWrap>
              {props.data?.fetchUseditems.map((el) => (
                <UsedItemListUIItem
                  key={uuidv4()}
                  el={el}
                  onClickMoveToDetail={props.onClickMoveToDetail(el)}
                />
              ))}
            </FlexWrap>
          </InfiniteScroll>
        </Item>

        <WrapperBottom>
          <CreateButton onClick={props.onClickMoveToWrite}>
            상품 등록
          </CreateButton>
        </WrapperBottom>
      </WrapperBody>

      <WrapperRight>
        <TodayView>
          오늘 본 상품
          {/* <Today> */}
          {todayItem.map((el: any) => (
            <TodayItem
              key={el._id}
              src={
                el?.images?.[0]
                  ? `https://storage.googleapis.com/${el.images?.[0]}`
                  : `/img/noimage.png`
              }
              onClick={onClickMoveTodayDetail}
              id={el._id}
            />
          ))}
          {/* </Today> */}
        </TodayView>
      </WrapperRight>
    </Wrapper>
  );
}
