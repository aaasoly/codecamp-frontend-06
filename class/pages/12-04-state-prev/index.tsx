import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // prevState : 임시 저장공간에서 가져옹ㅁ
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // 앞에 있는 prev 를 가져와서 1+1
    setCount((prev) => prev + 1);
    // 앞에 있는 임시 저장 prev 를 가져와서 2+1
    setCount((prev) => prev + 1);
    // 앞에 있는 임시 저장 prev 를 가져와서 3+1
    // count 가 한 번에 4씩 오르게 됨
  };
  return (
    <div>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCount}>카운트 올리기!!!</button>
    </div>
  );
}
