import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function CounterPage() {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);
  // inputRef = createRef<HTMLInputElement>();

  const [count, setCount] = useState(99);

  // 1. DidMount
  // useEffect(() => {
  //   console.log("마운트 됨!!!");
  //   inputRef.current?.focus();
  // }, []);
  // componentDidMount() {
  //   console.log("마운트 됨!!!");
  //   this.inputRef.current?.focus();
  //   // 포커스 깜빡깜빡
  // }

  // 2. DidUpdate : 완전히 동일하지 않음. DidUpdate는 수정시에만 실행되지만 이건 처음에도 실행됨
  useEffect(() => {
    console.log("수정되고 다시 그려짐!!!");
  }, [count]);
  // componentDidUpdate() {
  //   console.log("수정되고 다시 그려짐!!!"); // 리렌더
  // }

  // 3. WillUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!!!");
  //   }; // return 할 때 함수 실행
  // }, []);
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청 >> 나가기 버튼을 누르지 않고 나갔을 때도 api 요청이 됨
  // }

  // 4. DidMount 와 WillUnmount 합치기
  useEffect(() => {
    console.log("마운트 됨!!!");
    inputRef.current?.focus();

    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예(1. 추가렌더링, 2. prev와 [] 설정시 무한루프)
  // useEffect(() => {
  //   setCount(prev=>prev+1);
  // }, [count]);
  // 불필요한 추가 렌더링 발생, 가급적 setState 선언은 피하는 것이 좋다

  // [] 의존성 배열(Dependency Array)
  // 비어있을 경우 한 번만 실행되고 끝난다
  // 아예 없을 경우 무조건 다시 실행된다
  // [count] 의 경우 안에 들어있는 count가 바뀔 때마다 실행된다
  // 즉, 언제 DidUpdate 가 실행될지 결정할 수 있다
  // [count, writer, title] 여러개 작성할 수도 있다(셋 중 하나라도 바뀌면 실행)

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    // }));
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게?!!");
  // js는 순차적으로 실행되지만
  // useEffect 는 화면이 한 번 다 그려지고 나서 실행되기 때문에 console.log 먼저 실행

  // component 에서 제공해주는 기능
  return (
    <div>
      <input type="text" ref={inputRef} />
      {/* aaa 에 input 태그를 담아줌 */}
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>나가기</button>
    </div>
  );
}

// class는 도구 모음일뿐 컴포넌트의 역할을 하는게 아니다!!
//  >> hooks 사용할 수 없음
// 사용하고 싶으면 extends Component 를 써줘야한다
