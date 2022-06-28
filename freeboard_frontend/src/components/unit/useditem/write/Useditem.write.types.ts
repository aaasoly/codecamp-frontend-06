import { IQuery } from "../../../../commons/types/generated/types";

export interface ICreateUsedItemProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isEdit: boolean;
  isActive: boolean;
}

export interface IFormValues {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tag?: string;
  address?: string;
  postcode?: any;
  addrDetail?: string;
}

export interface IUpdateUsdeitemInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tag?: string;
  useditemAddress?: {
    address?: string;
    zipcode?: any;
    addressDetail?: string;
  };
  images?: string[];
}

export interface IButtonProps {
  isActive: boolean;
}
