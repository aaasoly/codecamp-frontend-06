import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  IUseditemQuestion,
  IUseditemQuestionAnswer,
} from "../../../../../commons/types/generated/types";

export interface IUseditemAnswerWriteProps {
  setIsAnswer?: Dispatch<SetStateAction<boolean>>;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
  el?: IUseditemQuestion;
  AnswerEl?: IUseditemQuestionAnswer;
  QuestionEl?: IUseditemQuestion;
}

export interface IUseditemQuestionAnswerWriteUIProps {
  isEdit?: boolean;
  onChangeReply: (event: ChangeEvent<HTMLInputElement>) => void;
  reply?: string;
  onClickCreateAnswer: () => Promise<void>;
  onClickUpdateAnswer: () => Promise<void>;
  el?: IUseditemQuestion;
  AnswerEl?: IUseditemQuestionAnswer;
}
