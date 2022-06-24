import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./UsedItem.detail.styles";
import Dompurify from "dompurify";
import Map from "../../../commons/map/Writemap";
import FetchMap from "../../../commons/map/Fetchmap";
import MapPage from "../../../commons/map/map";
import { useRecoilState } from "recoil";
import {
  getLatState,
  getLngState,
  useditemAddressState,
} from "../../../../commons/store";
import Pick from "../../../../../public/img/heart.svg";
import UseditemQuestionWrite from "../comment/question_write/Question.Write.container";
import UseditemQuestionList from "../comment/question_list/Question.List.container";
import { useState } from "react";
import Slider from "react-slick";

export default function UsedItemDetailUI(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pagingSettings = {
    dots: false,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  return (
    <S.Wrapper>
      <S.DetailTop>
        <S.DetailTopLeft>
          <S.StyledSlider
            asNavFor={nav2}
            ref={(slider1) => setNav1(slider1)}
            {...settings}
          >
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.Images
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.StyledSlider>
          <S.ThumSlider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            {...pagingSettings}
          >
            {props.data?.fetchUseditem.images
              ?.filter((el: string) => el)
              .map((el: string) => (
                <S.ThumImg
                  key={el}
                  src={`https://storage.googleapis.com/${el}`}
                />
              ))}
          </S.ThumSlider>
        </S.DetailTopLeft>

        <S.DetailTopRight>
          <S.ProductInfo>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
            <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
            <S.CreatedAt>
              {getDate(props.data?.fetchUseditem.createdAt)}
            </S.CreatedAt>
            <S.InfoBottom>
              <S.Price>{props.data?.fetchUseditem.price} 원</S.Price>
              <S.PickUnit>
                <S.PickCount>
                  {props.data?.fetchUseditem.pickedCount}
                </S.PickCount>
                <S.PickButton onClick={props.onClickPick}>
                  <Pick style={{ cursor: "pointer" }} width="25" height="23" />
                </S.PickButton>
              </S.PickUnit>
            </S.InfoBottom>
          </S.ProductInfo>

          {typeof window !== "undefined" ? (
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchUseditem.contents),
              }}
            ></S.Contents>
          ) : (
            <div></div>
          )}
          <S.TagDiv>
            {props.data?.fetchUseditem.tags ? (
              <div>
                {props.data?.fetchUseditem.tags.map((el, idx) => (
                  <S.Tags key={idx}>{el}</S.Tags>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </S.TagDiv>

          <S.SellerInfo>
            <S.Category>판매자</S.Category>
            <S.SellerDiv>
              {props.data?.fetchUseditem.seller.picture ? (
                <S.UserIcon src={props.data?.fetchUseditem.seller.picture} />
              ) : (
                <S.UserIcon src="/img/userImg.png" />
              )}

              <S.Seller>{props.data?.fetchUseditem.seller.name}</S.Seller>
            </S.SellerDiv>
          </S.SellerInfo>
        </S.DetailTopRight>
      </S.DetailTop>

      <S.DetailBottom>
        <S.DetailBottomLeft>
          <S.Category>거래 위치</S.Category>
          <S.Map>
            <FetchMap data={props.data} />
          </S.Map>
        </S.DetailBottomLeft>

        <S.DetailBottomRight>
          <S.Category>문의</S.Category>
          <UseditemQuestionWrite />
          <UseditemQuestionList />
        </S.DetailBottomRight>
      </S.DetailBottom>

      <S.ButtonGroup>
        <S.List__Button onClick={props.onClickMoveToList}>
          목록으로
        </S.List__Button>
        <S.Edit__Button
          onClick={
            props.sellerId === props.myId
              ? props.onClickMoveToUpdate
              : props.onClickBuying
          }
        >
          {props.sellerId === props.myId ? "수정" : "구매"} 하기
        </S.Edit__Button>

        {props.sellerId === props.myId ? (
          <S.Edit__Button onClick={props.onClickDelete}>
            삭제하기
          </S.Edit__Button>
        ) : (
          <S.Edit__Button
            onClick={props.onClickBasket(props.data?.fetchUseditem)}
          >
            장바구니
          </S.Edit__Button>
        )}
      </S.ButtonGroup>
    </S.Wrapper>
  );
}
