import * as S from "./Boardetail.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
// import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { IMyPropsBoardDetailUI } from "./Boardetail.types";
import { getDate } from "../../../../commons/libraries/utils";
// import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

export default function BoardDetailUI(props: IMyPropsBoardDetailUI) {
  return (
    <S.Wrapper>
      <S.PostWrapper>
        <S.PostHeader>
          <S.PostTitle>{props.data?.fetchBoard?.title}</S.PostTitle>
          <S.HeaderLeft>
            <S.PostUserIcon>
              <FontAwesomeIcon icon={faCircleUser} size="3x" />
            </S.PostUserIcon>
            <S.PostInfo>
              <S.PostUser>{props.data?.fetchBoard?.writer}</S.PostUser>
              <S.PostDate>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.PostDate>
            </S.PostInfo>
          </S.HeaderLeft>
        </S.PostHeader>

        <S.PostBody>
          {props.data?.fetchBoard.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <S.PostPicture
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
          <S.PostContent>{props.data?.fetchBoard?.contents}</S.PostContent>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube url={String(props.data?.fetchBoard?.youtubeUrl)} />
          )}
          {/* 좋아요 싫어요 버튼 */}
          <S.LikeIcons>
            <S.Like>
              <S.Likebutton onClick={props.onClickLike}></S.Likebutton>
              <S.LikeNum>{props.data?.fetchBoard.likeCount}</S.LikeNum>
            </S.Like>
            <S.DisLike>
              <S.Dislikebutton onClick={props.onClickDislike}></S.Dislikebutton>
              <S.DisLikeNum>{props.data?.fetchBoard.dislikeCount}</S.DisLikeNum>
            </S.DisLike>
          </S.LikeIcons>
        </S.PostBody>
      </S.PostWrapper>

      <S.BtnGroup>
        <S.Btn onClick={props.onClickMovetoBoardList}>목록으로</S.Btn>
        <S.Btn onClick={props.onClickMovetoUpdate}>수정하기</S.Btn>
        <S.Btn onClick={props.onClickDelete}>삭제하기</S.Btn>
      </S.BtnGroup>
    </S.Wrapper>
  );
}
