// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";

// document 문제로 dynamic import 로 가져오기
// ssr: false 는 서버 사이드에서 랜더링을 해주지 않겠다는 의미
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);
    // value === "<p><br></p>" ? """ : value
    // 아무것도 입력하지 않았을 때 빈값이어야 하므로 3상연산자로 만들어주나디

    // coonChange 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };

  return (
    <div>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      {/* reactquill의 onChange는 html의 onChange와 다르다 */}
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </div>
  );
}
