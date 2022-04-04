import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onClickCreateComment: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeStar: (value: number) => void;
  onClickDeleteComment: () => void;

  writer: string;
  password: string;
  contents: string;
  // rating: number;
}
