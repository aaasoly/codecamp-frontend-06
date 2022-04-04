/// 프레젠터
export interface IMyPropsBoardDetailUI {
  data?: any;
  onClickDelete: () => void;
  onClickMovetoUpdate: () => void;
  onClickMovetoBoardList: () => void;

  onClickLike: () => void;
  onClickDislike: () => void;
}
