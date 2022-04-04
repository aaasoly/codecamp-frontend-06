import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent, ChangeEvent } from "react";

export interface IBoardCommentListUIProps {
  onClickWriter: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDeleteComment: () => void;
  onChangeDeletePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickOpenDeleteModal: (event: MouseEvent<HTMLDivElement>) => void;
  isOpenDeleteModal: boolean;
  data?: Pick<IQuery, "fetchBoardComments">;
}
