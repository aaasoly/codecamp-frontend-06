import * as s from "./styles";
import OotdFeed from "../../src/check";

const Ootd = () => {
  return (
    <s.WrapperDiv>
      <s.WrapperTopDiv>
        <s.TodayInfoDiv>
          <s.DateDiv>
            <s.MonthSpan>05</s.MonthSpan>
            <s.DaySpan>06</s.DaySpan>
          </s.DateDiv>

          <s.TempSpan>22°C</s.TempSpan>
        </s.TodayInfoDiv>

        <s.TagSeletedDiv>
          태그
          <s.TagSeletedBack>#전라</s.TagSeletedBack>
        </s.TagSeletedDiv>
      </s.WrapperTopDiv>

      <s.WrapperBodyDiv>
        <s.TagWrapperDiv>
          <s.TagWrapperTopDiv>
            <s.TagSpan>태그</s.TagSpan>
          </s.TagWrapperTopDiv>
          <s.TagBoxDiv>
            <s.TagCategorySpan>지역</s.TagCategorySpan>
            <s.RegionTagsBoxDiv>
              <s.RegionTagsSpan>서울</s.RegionTagsSpan>
              <s.RegionTagsSpan>경기</s.RegionTagsSpan>
              <s.RegionTagsSpan>강원</s.RegionTagsSpan>
              <s.RegionTagsSpan>충청</s.RegionTagsSpan>
              <s.RegionTagsSpan>경상</s.RegionTagsSpan>
              <s.RegionTagsSpan>전라</s.RegionTagsSpan>
              <s.RegionTagsSpan>제주</s.RegionTagsSpan>
            </s.RegionTagsBoxDiv>
          </s.TagBoxDiv>

          <s.TagBoxDiv>
            <s.TagCategorySpan>스타일</s.TagCategorySpan>
            <s.RegionTagsBoxDiv>
              <s.RegionTagsSpan>캐주얼</s.RegionTagsSpan>
              <s.RegionTagsSpan>스트릿</s.RegionTagsSpan>
              <s.RegionTagsSpan>트레이닝</s.RegionTagsSpan>
              <s.RegionTagsSpan>포멀</s.RegionTagsSpan>
              <s.RegionTagsSpan>세미포멀</s.RegionTagsSpan>
            </s.RegionTagsBoxDiv>
          </s.TagBoxDiv>

          <s.TagBoxDiv>
            <s.TagCategorySpan>아우터</s.TagCategorySpan>
            <s.RegionTagsBoxDiv>
              <s.RegionTagsSpan>트랙자켓</s.RegionTagsSpan>
              <s.RegionTagsSpan>플리스</s.RegionTagsSpan>
              <s.RegionTagsSpan>자켓</s.RegionTagsSpan>
              <s.RegionTagsSpan>점퍼</s.RegionTagsSpan>
              <s.RegionTagsSpan>코트</s.RegionTagsSpan>
            </s.RegionTagsBoxDiv>
          </s.TagBoxDiv>

          <s.TagBoxDiv>
            <s.TagCategorySpan>상의</s.TagCategorySpan>
            <s.RegionTagsBoxDiv>
              <s.RegionTagsSpan>티셔츠</s.RegionTagsSpan>
              <s.RegionTagsSpan>셔츠/블라우스</s.RegionTagsSpan>
              <s.RegionTagsSpan>니트</s.RegionTagsSpan>
              <s.RegionTagsSpan>맨투맨</s.RegionTagsSpan>
              <s.RegionTagsSpan>후드</s.RegionTagsSpan>
            </s.RegionTagsBoxDiv>
          </s.TagBoxDiv>

          <s.TagBoxDiv>
            <s.TagCategorySpan>하의</s.TagCategorySpan>
            <s.RegionTagsBoxDiv>
              <s.RegionTagsSpan>청바지</s.RegionTagsSpan>
              <s.RegionTagsSpan>슬랙스</s.RegionTagsSpan>
              <s.RegionTagsSpan>반바지</s.RegionTagsSpan>
              <s.RegionTagsSpan>스커트</s.RegionTagsSpan>
            </s.RegionTagsBoxDiv>
          </s.TagBoxDiv>

          <s.TagBoxDiv style={{ borderBottom: "none" }}>
            <s.TagCategorySpan>지역</s.TagCategorySpan>
            <s.RegionTagsBoxDiv>
              <s.RegionTagsSpan>원피스</s.RegionTagsSpan>
            </s.RegionTagsBoxDiv>
          </s.TagBoxDiv>
        </s.TagWrapperDiv>

        <s.Feeds>
          {new Array(20).fill(1).map((el, idx) => (
            <div key={idx}>
              <OotdFeed />
            </div>
          ))}
        </s.Feeds>
      </s.WrapperBodyDiv>
    </s.WrapperDiv>
  );
};

export default Ootd;
