import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IUseditemQuestion } from "../../../../../commons/types/generated/types";

export interface IUseditemQuestionWriteProps {
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
  el?: IUseditemQuestion;
}

export interface IUpdateUseditemQuestionInput {
  contents?: string;
}

export interface IUseditemQuestionWriteUIProps {
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  contents?: string;
  el?: IUseditemQuestion;
  isEdit?: boolean;
  onClickCreateQuestion: () => Promise<void>;
  onClickUpdateQuestion: () => Promise<void>;
}
