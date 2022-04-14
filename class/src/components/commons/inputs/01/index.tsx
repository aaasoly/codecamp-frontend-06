import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

interface Iprops {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

const Input = styled.input``;
export default function Input01(props: Iprops) {
  return <Input type={props.type} {...props.register} />;
}
