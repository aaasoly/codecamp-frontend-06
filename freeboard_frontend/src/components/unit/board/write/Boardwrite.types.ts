import { ChangeEvent } from "react";
/// 컨테이너

export interface IPropsBoardWrite {
  isEdit: boolean;
  data?: any;
}

export interface IMyUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
}

export interface IMyVariables {
  updateBoardInput: object;
  boardId?: any;
  number?: number;
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}

export interface ISubmitButtonProps {
  isActive: boolean;
}

/// 프레젠터

export interface IPropsBoardWriteUI {
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void; // return 값이 일정하지 않을 경우에 많이 사용
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;

  nameError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  // addressError: string;

  isActive: boolean;
  isEdit: boolean;
  data?: any;

  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (address: any) => void;
  isOpen: boolean;

  address: any;
  postcode: any;
}
