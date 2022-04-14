import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

const Error = styled.div`
  color: red;
  font-size: 10px;
`;

// 아래 shcema는 컴포넌트 분리시 .validations.ts 파일 만들어서 보관하기
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  // 정규표현식의 조건이 이미 내장되어 있음
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해야 합니다.")
    .max(15, "비밀번호는 최대 15자리를 넘을 수 없습니다.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // 모든 값이 들어왔을 때 formState.isValid = true 가 된다.

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  // console.log("리렌더링 체크");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: <input type="text" {...register("email")} /> */}
      이메일: <Input01 type="text" register={register("email")} />
      {/* 여기서 작성하는 type="text" 는 html input 태그의 속성값이 아니라 props이기 때문에
      꼭꼭 props 로 넘겨줘야 적용이 가능하다 */}
      <Error>{formState.errors.email?.message}</Error>
      <br />
      {/* 비밀번호: <input type="password" {...register("password")} /> */}
      비밀번호: <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      <br />
      {/* <LoginButton isActive={formState.isValid}>로그인하기</LoginButton> */}
      <Button01 isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}

// ...register("") 여기에 state 값 넣기
// handleSubmit 이 값을 onclickSubmit 에 전달
