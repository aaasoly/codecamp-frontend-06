import {
  IQuery,
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../../commons/types/generated/types";

export interface IUseditemQuestionAnswerListProps {
  el?: IUseditemQuestion;
}

export interface IUseditemQuestionAnswersListUIProps {
  data?: Pick<IQuery, "fetchUseditemQuestionAnswers">;
  logindata?: any;
  QuestionEl?: IUseditemQuestion;
  onLoadMore: () => void;
}

export interface IUseditemQuestionAnswersListItemProps {
  logindata?: any;
  AnswerEl?: IUseditemQuestionAnswer;
  QuestionEl?: IUseditemQuestion;
}
