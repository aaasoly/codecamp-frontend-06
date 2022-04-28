import axios from "axios";

export default function OpenGraphPreviewPage() {
  const onClickOpengraph = async () => {
    // cors 문제로 모든 사이트가 get 이 되지 않는다
    const result = await axios.get("https://www.gmarket.co.kr");
    console.log(result.data);
    console.log(result.data.split("<meta"));
    console.log(result.data.split("<meta").filter((el) => el.includes("og:")));
  };
  return (
    <div>
      <h1>사이트 미리보기 연습 !!</h1>
      <button onClick={onClickOpengraph}>미리보기 실행</button>
    </div>
  );
}
