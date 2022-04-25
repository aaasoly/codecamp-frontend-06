import InfiniteScroll from "react-infinite-scroller";
import UsedItemListUIItem from "./UsedItem.list.presenterItem";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

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
`;

const Today = styled.div``;

const CreateButton = styled.button`
  width: 124px;
  height: 52px;
  background-color: #fff;
`;

export default function UsedItemListUI(props) {
  return (
    <Wrapper>
      <Wrapper__Top>
        인기 상품
        <Today>
          {/* {props.ofTheBest?.fetchUseditemsOfTheBest.map((el) => (
            <div>{props.el._id}</div>
          ))} */}
        </Today>
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
                onClickMoveToDetail={props.onClickMoveToDetail}
              />
            ))}
          </InfiniteScroll>
        </div>

        <Wrapper__Right>
          <TodayView>
            <Today>오늘 본 상품</Today>
          </TodayView>
        </Wrapper__Right>
      </Wrapper__Body>
      <Wrapper__Bottom>
        <CreateButton onClick={props.onClickMoveToWrite}>새글등록</CreateButton>
      </Wrapper__Bottom>
    </Wrapper>
  );
}
