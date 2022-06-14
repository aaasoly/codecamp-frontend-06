import styled from "@emotion/styled";

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WrapperBodyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const WrapperTopDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const TodayInfoDiv = styled.div`
  width: 200px;
  height: 80px;
  background: #ffffff;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 26px;
  margin-right: 20px;
  position: fixed;
  z-index: 1;
`;

export const DateDiv = styled.div`
  width: 66px;
  height: 32px;
  display: flex;
  justify-content: space-between;
`;

export const MonthSpan = styled.span`
  font-weight: 600;
  font-size: 26px;
  color: rgba(51, 51, 51, 0.7);
`;

export const DaySpan = styled.span`
  font-weight: 600;
  font-size: 26px;
`;

export const TempSpan = styled.span`
  font-weight: 600;
  font-size: 26px;
  color: #b7e576;
`;

export const TagSeletedDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15px;
  height: 80px;
`;

export const TagSeletedBack = styled.span`
  background: #fff2b2;
  border-radius: 50px;
  line-height: 32px;
  width: 71px;
  height: 32px;
  text-align: center;
`;

export const TagWrapperDiv = styled.div`
  width: 203px;
  height: 730px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* padding: 13px 14px 15px 83px; */
  border: 1px solid #bebebe;
  border-radius: 10px;
  position: fixed;
  background-color: #fff;
`;

export const TagWrapperTopDiv = styled.div`
  width: 203px;
  height: 38px;
  padding-bottom: 12px;
  border-bottom: 1px solid #bebebe;
`;

export const TagSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const TagBoxDiv = styled.div`
  width: 175px;
  height: 97px;
  border-bottom: 1px solid #bebebe;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 9px 14px 16px 15px;
`;

export const TagCategorySpan = styled.span`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 15px;
`;

export const RegionTagsBoxDiv = styled.div`
  width: 146px;
  height: 44px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-left: 3px;
`;

export const RegionTagsSpan = styled.span`
  font-size: 12px;
  // width: 21px;
  // height: 15px;
  margin-right: 8px;
  margin-bottom: 3px;
`;

export const Feeds = styled.div`
  display: flex;
  width: 965px;
  /* height: 100%; */
  justify-content: space-between;
  flex-wrap: wrap;
`;
