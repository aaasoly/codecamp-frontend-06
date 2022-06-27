import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import SignupPageUI from "./Signup.presenter";
import { CREATE_USER } from "./Signup.queries";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IFormValues } from "./Signup.types";

const schema = yup.object({
  name: yup.string().required("이름을 입력해주세요."),
  email: yup
    .string()
    .email("이메일 형식이 올바르지 않습니다.")
    .required("이메일을 입력해주세요."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해야 합니다.")
    .max(15, "비밀번호는 최대 15자리를 넘을 수 없습니다.")
    .required("비밀번호를 입력해주세요."),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("비밀번호가 일치하지 않습니다."),
});

export default function SignupPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const { register, handleSubmit, formState, watch } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSignup = async (data: IFormValues) => {
    if (data.name && data.email && data.password) {
      try {
        await createUser({
          variables: {
            createUserInput: {
              name: data.name,
              email: data.email,
              password: data.password,
            },
          },
        });
        router.push("/login");
        alert("회원가입을 축하합니다!");
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("회원가입에 필요한 정보를 모두 입력해주세요.");
    }
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  return (
    <SignupPageUI
      onClickSignup={onClickSignup}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
