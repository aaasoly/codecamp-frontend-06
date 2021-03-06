import ImgUpload from "../../../commons/upload/imgupload.container";
import * as S from "./UsedItem.write.style";
import { v4 as uuidv4 } from "uuid";
import MapPage from "../../../commons/map/01";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";

export default function CreateUsedItemUI(props: any) {
  return (
    <S.Wrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickUpdate)
            : props.handleSubmit(props.onClickSubmit)
        }
      >
        <S.Name>
          <S.SubTitle>상품명</S.SubTitle>
          <S.NameInput
            type="text"
            {...props.register("name")}
            placeholder="상품명을 작성해주세요."
            defaultValue={props.data?.fetchUseditem.name}
          />
        </S.Name>

        <S.Remarks>
          <S.SubTitle>한 줄 요약</S.SubTitle>
          <S.RemarksInput
            type="text"
            {...props.register("remarks")}
            placeholder="상품에 대해 간략하게 소개해주세요."
            defaultValue={props.data?.fetchUseditem.remarks}
          />
        </S.Remarks>

        <S.Contents>
          <S.SubTitle>상품설명</S.SubTitle>
          <S.ReactQuillInput
            onChange={props.onChangeContents}
            value={props.getValues("contents") || ""}
          />
        </S.Contents>

        <S.Price>
          <S.SubTitle>판매가격</S.SubTitle>
          <S.PriceInput
            type="number"
            {...props.register("price")}
            placeholder="판매 가격을 입력해주세요."
            defaultValue={props.data?.fetchUseditem.price}
          />
        </S.Price>

        <S.Tags>
          <S.SubTitle>태그입력</S.SubTitle>
          <S.TagsInput
            type="text"
            onKeyUp={props.onKeyUpHash}
            {...props.register("tags")}
            placeholder="입력 후 스페이스바를 눌러 등록할 수 있습니다. 등록된 태그 클릭시 삭제됩니다."
            defaultValue={props.data?.fetchUseditem.tags}
          />
          <div>
            {props.hashArr.map((el: string) => (
              <S.TagUnit key={uuidv4()} onClick={props.deleteTag}>
                {el}
              </S.TagUnit>
            ))}
          </div>
        </S.Tags>

        <S.Location>
          <S.LocationTop>
            <S.SubTitle>거래 위치</S.SubTitle>
            <S.PostCode>
              <S.PostInput
                placeholder="07520"
                value={
                  props.postcode ||
                  props.data?.fetchUseditem?.useditemAddress?.zipcode ||
                  ""
                }
                readOnly
                {...props.register("postcode")}
              />
              <S.AddrSearch type="button" onClick={props.showModal}>
                우편번호 검색
              </S.AddrSearch>
              {props.isOpen && (
                <Modal
                  visible={true}
                  onOk={props.handleOk}
                  onCancel={props.handleCancel}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </S.PostCode>

            <S.Address>
              <S.AddrInput
                onChange={props.onChangeAddress}
                defaultValue={
                  props.address ||
                  props.data?.fetchUseditem?.useditemAddress?.address ||
                  ""
                }
                readOnly
                {...props.register("address")}
              />
              <S.AddrDetailInput
                onChange={props.onChangeAddrDetail}
                {...props.register("addrDetail")}
              />
            </S.Address>
          </S.LocationTop>

          <S.LocationBottom>
            <S.Map>
              <MapPage
                address={props.address}
                addrDetail={props.addrDetail}
                fetchAddr={props.data?.fetchUseditem?.useditemAddress?.address}
              />
            </S.Map>
          </S.LocationBottom>
        </S.Location>

        <S.Images>
          <S.SubTitle>사진 첨부</S.SubTitle>
          <S.ImageBox>
            {props.fileUrls.map((el: string) => (
              <ImgUpload
                key={uuidv4()}
                index={uuidv4()}
                fileUrl={el}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </S.ImageBox>
        </S.Images>
        <S.Button isActive={props.isActive}>
          {props.isEdit ? "수정" : "등록"} 하기
        </S.Button>
      </form>
    </S.Wrapper>
  );
}
