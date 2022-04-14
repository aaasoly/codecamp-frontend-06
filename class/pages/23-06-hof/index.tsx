export default function HofPage() {
  const onClickChild = (el) => (event) => {
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}

// HOF를 사용하면 event.target.id 를 더이상 사용하지 않아도 된다
// onClickChild(el)()() 처럼 함수를 여러번 겹칠 수 있다.
