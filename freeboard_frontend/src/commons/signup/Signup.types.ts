import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValues {
  name?: string;
  email?: string;
  password?: string;
}

export interface ILoginPage {
  onClickLogin: (data: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISignUpPageUIProps {
  onClickSignup: (data: IFormValues) => void;
  onClickMoveToLogin: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
}
