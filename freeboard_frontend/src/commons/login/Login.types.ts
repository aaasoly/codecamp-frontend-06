import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IFormValues {
  email?: string;
  password?: string;
}

export interface ILoginPage {
  onClickLogin: (data: ChangeEvent<HTMLInputElement>) => void;
}

export interface ILoginPageUIProps {
  onClickLogin: (data: IFormValues) => void;
  onClickMoveToSignup: () => void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
}
