import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./UsedItem.detail.styles";
import Dompurify from "dompurify";

export default function UsedItemDetailUI(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.Wrapper__Header>
        <S.UserIcon></S.UserIcon>
        <S.Seller>{props.data?.fetchUseditem.seller.name}</S.Seller>
      </S.Wrapper__Header>

      <S.Wrapper__Body>
        <S.Body__Top>
          <S.ProductInfo>
            <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
            <S.Price>{props.data?.fetchUseditem.price}</S.Price>
            <S.CreatedAt>
              {getDate(props.data?.fetchUseditem.createdAt)}
            </S.CreatedAt>
          </S.ProductInfo>
        </S.Body__Top>

        <S.Body__Center>
          <S.StyledSlider {...settings}>
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Images
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.StyledSlider>
          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
          ) : (
            <div></div>
          )}
          <S.Tags>{props.data?.fetchUseditem.tags}</S.Tags>
        </S.Body__Center>

        <S.Map></S.Map>
      </S.Wrapper__Body>

      <S.Wrapper__Footer>
        <S.List__Button onClick={props.onClickMoveToList}>
          목록으로
        </S.List__Button>
        <S.Edit__Button>구매하기</S.Edit__Button>
      </S.Wrapper__Footer>
    </S.Wrapper>
  );
}
