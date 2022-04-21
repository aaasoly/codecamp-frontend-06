import Button01 from "../../../commons/buttons/01";
import Input01 from "../../../commons/inputs/01";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./UsedItem.write.style";

export default function CreateUsedItemUI(props: any) {
  return (
    <S.Wrapper>
      <S.MainTitle>상품 등록하기</S.MainTitle>
      <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.Name>
          <S.SubTitle>상품명</S.SubTitle>
          <S.NameInput
            type="text"
            {...props.register("name")}
            placeholder="상품명을 작성해주세요."
          />
        </S.Name>

        <S.Remarks>
          <S.SubTitle>한 줄 요약</S.SubTitle>
          <S.RemarksInput
            type="text"
            {...props.register("remarks")}
            placeholder="상품명을 작성해주세요."
          />
        </S.Remarks>

        <S.Contents>
          <S.SubTitle>상품설명</S.SubTitle>
          <S.ReactQuillInput onChange={props.onChangeContents} />
        </S.Contents>

        <S.Price>
          <S.SubTitle>판매가격</S.SubTitle>
          <S.PriceInput
            type="text"
            {...props.register("price")}
            placeholder="판매 가격을 입력해주세요."
          />
        </S.Price>

        <S.Tags>
          <S.SubTitle>태그입력</S.SubTitle>
          <S.TagsInput
            type="text"
            {...props.register("tags")}
            placeholder="#태그 #태그 #태그"
          />
        </S.Tags>

        <S.Location>
          <S.Location__Left>
            <S.SubTitle>거래 위치</S.SubTitle>
            <S.Map></S.Map>
          </S.Location__Left>

          <S.Location__Right>
            <S.GPS>
              <S.SubTitle>GPS</S.SubTitle>
              <S.GPS__Input>
                <S.LAT />
                <S.LNG />
              </S.GPS__Input>
            </S.GPS>

            <S.Adress>
              <S.SubTitle>주소</S.SubTitle>
              <S.Adress1 />
              <S.Adress1 />
            </S.Adress>
          </S.Location__Right>
        </S.Location>

        <S.Button>등록하기</S.Button>
      </form>
    </S.Wrapper>
  );
}
