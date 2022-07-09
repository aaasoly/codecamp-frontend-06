import { IQuery } from "../../../../commons/types/generated/types";

export interface IUsedItemDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickPick: () => void;
  onClickMoveToList: () => void;
  onClickMoveToUpdate: () => void;
  onClickBuying: () => Promise<void>;
  onClickDelete: () => Promise<void>;
  onClickBasket: (el: any) => () => void;
  sellerId: string;
  myId: string;
}
