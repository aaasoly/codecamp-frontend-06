import { IQuery, IUseditem } from "../../../../commons/types/generated/types";

export interface IUsedItemListUIProps {
  todayWatched: string;
  onLoadMore: () => void;
  onClickMoveToDetail: (el: any) => void;
  onClickMoveToWrite: () => void;
  data?: Pick<IQuery, "fetchUseditems">;
}

export interface IUsedItemListUIItemProps {
  el: IUseditem;
  onClickMoveToDetail: void;
}
