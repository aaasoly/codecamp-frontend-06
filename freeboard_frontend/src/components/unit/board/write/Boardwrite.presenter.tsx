import * as S from "./Boardwrite.styles";
import { IBoardWriteUIProps } from "./Boardwrite.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import ImgUpload from "../../../commons/upload/imgupload.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <S.Wrapper>
      <S.User>
        <S.UserInfo>
          <S.Item>작성자</S.Item>
          <S.Blank
            type="text"
            id="writer"
            placeholder="이름을 적어주세요."
            onChange={props.onChangeInput}
            defaultValue={props.data?.fetchBoard.writer}
            readOnly={props.data?.fetchBoard.writer}
          />
          <S.Error>{props.writerError}</S.Error>
        </S.UserInfo>
        <S.UserInfo>
          <S.Item>비밀번호</S.Item>
          <S.Blank
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요."
            onChange={props.onChangeInput}
          />
          <S.Error>{props.passwordError}</S.Error>
        </S.UserInfo>
      </S.User>

      <S.Title>
        <S.Item>제목</S.Item>
        <S.Blank
          type="text"
          id="title"
          placeholder="제목을 작성해주세요."
          onChange={props.onChangeInput}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Error>{props.titleError}</S.Error>
      </S.Title>

      <S.Contents>
        <S.Item>내용</S.Item>
        <S.MainContents
          id="contents"
          placeholder="내용을 작성해주세요."
          onChange={props.onChangeInput}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.Error>{props.contentsError}</S.Error>
      </S.Contents>

      <S.Address>
        <S.Item>주소</S.Item>
        <S.Post>
          <S.PostBlank
            type="text"
            placeholder="07520"
            readOnly
            value={
              props.postcode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              ""
            }
          />
          <S.PostSearch onClick={props.showModal}>우편번호 검색</S.PostSearch>

          {props.isOpen && ( // isOpen이 true 면 Modal 보여줌
            <Modal
              title="Basic Modal"
              visible={true}
              onOk={props.handleOk}
              onCancel={props.handleCancel}
            >
              <DaumPostcode onComplete={props.handleComplete} />
            </Modal>
          )}
        </S.Post>
        <S.AddressBlank
          type="text"
          readOnly
          value={
            props.address || props.data?.fetchBoard?.boardAddress?.address || ""
          }
          // || 뒤는 수정하기에 필요한 defaultValue
        />
        <S.AddressBlank
          type="text"
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.addressDetail ||
            props.data?.fetchBoard.boardAddress?.addressDetail ||
            ""
          }
        />
      </S.Address>

      <S.Youtube>
        <S.Item>유튜브</S.Item>
        <S.Blank
          type="text"
          placeholder="첨부하고 싶은 유튜브 동영상 링크를 넣어주세요."
          onChange={props.onChangeYoutube}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />
      </S.Youtube>

      <S.Picture>
        <S.Item>사진첨부</S.Item>
        <S.ImgIcon>
          {props.fileUrls.map((el: string, index: number) => (
            <ImgUpload
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImgIcon>
      </S.Picture>

      <S.BtnSubmit
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        isActive={props.isActive}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </S.BtnSubmit>
    </S.Wrapper>
  );
}
