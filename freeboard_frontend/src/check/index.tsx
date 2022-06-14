import styled from "@emotion/styled";

const FeedWrapperDiv = styled.div`
  width: 230px;
  border: 1px solid #bebebe;
  border-radius: 15px;
  margin-bottom: 15px;
`;

const FeedHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`;

const UserIcon = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #bebebe;
  margin-right: 5px;
`;

const UserNameSpan = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
`;

const FeedBody = styled.div`
  width: 230px;
  height: 300px;
`;

const FeedImage = styled.div`
  width: 230px;
  height: 300px;
  background-color: #bebebe;
`;

const FeedBottomFooter = styled.footer`
  width: 230px;
  padding: 10px 10px 5px;
`;

const BottomTop = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const TagSelected = styled.span`
  // width: 37px;
  // height: 16px;
  background: #fff2b2;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

const TagNoSelected = styled.span`
  // width: 37px;
  // height: 16px;
  background: #dddddd;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  text-align: center;
  padding: 2px 6px;
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ClothInfoDiv = styled.div`
  width: 210px;
  height: 35px;
  background: #ffffff;
  border: 1px solid #bebebe;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const ClothIcon = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid #333;
  margin-right: 10px;
`;

const ClothName = styled.span`
  font-size: 12px;
`;

const OotdFeed = () => {
  return (
    <FeedWrapperDiv>
      <FeedHeader>
        <UserIcon></UserIcon>
        <UserNameSpan>fkdjlf</UserNameSpan>
      </FeedHeader>

      <FeedBody>
        <FeedImage></FeedImage>
      </FeedBody>

      <FeedBottomFooter>
        <BottomTop>
          <TagSelected>#전라</TagSelected>
          <TagSelected>#청바지</TagSelected>
          <TagSelected>#청바지</TagSelected>
          <TagSelected>#청바지</TagSelected>
          <TagNoSelected>#스트릿</TagNoSelected>
        </BottomTop>

        <FooterBottom>
          <ClothInfoDiv>
            <ClothIcon></ClothIcon>
            <ClothName>UTHR 아노락 긴팔 그레이</ClothName>
          </ClothInfoDiv>
          <ClothInfoDiv>
            <ClothIcon></ClothIcon>
            <ClothName>UTHR 아노락 긴팔 그레이</ClothName>
          </ClothInfoDiv>
          {/* <ClothInfoDiv>
            <ClothIcon></ClothIcon>
            <ClothName>UTHR 아노락 긴팔 그레이</ClothName>
          </ClothInfoDiv> */}
        </FooterBottom>
      </FeedBottomFooter>
    </FeedWrapperDiv>
  );
};

export default OotdFeed;
