import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
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

export interface IBoardWriteUIProps {
  onChangeInput: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onChangeName?: (event: ChangeEvent<HTMLInputElement>) => void; // return 값이 일정하지 않을 경우에 많이 사용
  onChangePassword?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutube: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail?: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls?: (fileUrl: string, index: number) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;

  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;

  isActive: boolean;
  isEdit: boolean;
  data?: any;

  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;
  handleComplete: (address: any) => void;
  isOpen: boolean;

  addressDetail: string;
  address: any;
  postcode: any;

  fileUrls: any;
}
