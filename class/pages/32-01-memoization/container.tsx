import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다");

  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // useMemo 를 사용해서 렌더링이 되더라도 값을 고정할 수 있다
  // dependency array 를 이용해서 값이 변경되는 기준을 줄 수 있다
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // useCallback 을 잘못 쓸 경우 state 가 같이 기억돼서 값이 변하지 않는다
  // 직접적으로 state 를 사용하는 걸 피해야 한다
  // prev를 써줄 것!
  // const onClickCountState = useCallback(() => {
  //   // console.log(countState + 1);
  //   setCountState((prev) => prev + 1);
  // }, []);

  // useMemo 로 useCallback 만들어보기!!!
  // return 값을 함수로 주자
  const onClickCountState = useMemo(() => {
    return () => {
      // console.log(countState + 1);
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>=========================================</div>
      <h1>이것은 컨테이너 입니다</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!!</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1 올리기!!!</button>

      {/* 직접 작성도 가능 */}
      {/* <button onClick={() => {
        setCountState((prev) => prev + 1)
      }}>카운트(state)+1 올리기!!!</button> */}

      <div>=========================================</div>
      <MemoizationPresenterPage countState={countState} />
    </div>
  );
}
