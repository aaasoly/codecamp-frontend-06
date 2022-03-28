import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export interface IBoardCommentListUIProps {
  onClickWriter: (event: MouseEvent<HTMLDivElement>) => void;
  data?: Pick<IQuery, "fetchBoardComments">;
}
