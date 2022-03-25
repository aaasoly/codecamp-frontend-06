///프레젠터
import { MouseEvent } from "react";

export interface IPropsBoardListPageUI {
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
  data?: any;
}
