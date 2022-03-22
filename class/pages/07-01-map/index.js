export default function MapFruitsPage(){
  // 리랜더링 되도 새로 만들어지지 않음
  const FRUITS = [
    { number: 1, title: "레드향" }, // <div>1 레드향</div>
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
  ];

  //const ccc = FRUITS.map((el) => (<div>{el.number} {el.title}</div>))
  // 태그 안에 자바스크립트가 있을 땐 중괄호로 감싼다! <div>{js}</div>

  // const aaa = [ <div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>  ]

  // const bbb = [ "나의레드향", "나의샤인머스켓", "나의산청딸기"].map((el) => (<div>{el}</div>))

  return (
    <div>
      {FRUITS.map((el) => 
        (<div>{el.number} {el.title}</div> // 바로 읽을 수 있게끔 변수보단 식을 그대로 써주는게 좋다
      ))} 
    </div>
  )
}