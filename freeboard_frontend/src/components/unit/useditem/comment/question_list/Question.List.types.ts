import {
  IQuery,
  IUseditemQuestion,
} from "../../../../../commons/types/generated/types";

export interface IUseditemQuestionListUIProps {
  onLoadMore: () => void;
  data?: Pick<IQuery, "fetchUseditemQuestions">;
  logindata?: any;
}

export interface IUseditemQuestionListItemProps {
  logindata?: any;
  el?: IUseditemQuestion;
}
