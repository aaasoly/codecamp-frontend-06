import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent, ChangeEvent, Key } from "react";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: any;
  onClickWriter?: (event: MouseEvent<HTMLDivElement>) => void;
}

export interface IBoardCommentListItemUIProps {
  onClickWriter?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDeleteComment: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLDivElement>) => void;
  isOpenDeleteModal: boolean;
  onLoadMore: any;
  data?: Pick<IQuery, "fetchBoardComments">;
  key?: Key | null | undefined;
  el?: any;
}
