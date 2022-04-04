import Child1 from "../../src/components/unit/board/14-lifting-state-up/Child1";
import Child2 from "../../src/components/unit/board/14-lifting-state-up/Child2";
import { useState } from "react";

export default function LiftingStateUpPage() {
  const [count, setCount] = useState(0);
  // Child1 에 있던 state 값을 가져옴

  // 방법1 : 실행 함수 전체 넘기기
  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child1 count={count} setCount={setCount} />
      <div> =============================== </div>
      <Child2 count={count} onClickCountUp={onClickCountUp} />
    </div>
  );
}
