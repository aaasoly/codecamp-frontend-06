export default function Child1(props) {
  // 방법2 : setCount 받아와서 함수 새로 작성하기
  const aaa = () => {
    props.setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>자식1의 카운트: {props.count}</div>
      <button onClick={aaa}>카운트 올리기!!!</button>
    </div>
  );
}
