import axios from "axios";

export default function CallbackPromiseAsyncawaitPage() {
  const onClickCallback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
    aaa.send(); // 요청
    aaa.addEventListener("load", (res) => {
      const num = res.target.response.split(" ")[0]; // 랜덤숫자

      const bbb = new XMLHttpRequest();
      bbb.open("get", `http://koreanjson.com/posts/${num}`);
      bbb.send();
      bbb.addEventListener("load", (res) => {
        const userId = res.target.response.userId;

        const ccc = new XMLHttpRequest();
        ccc.open("get", `http://koreanjson.com/posts?useId=${userId}`);
        ccc.send();
        ccc.addEventListener("load", (res) => {
          console.log(res); // 최종결과값
        });
      });
    }); // 응답 오면 함수 실행시켜줘~ (콜백함수)
  };

  // 시간이 걸리는 작업을 할 때 사용한다 ex.외부api 요청
  // new Promise((resolve, reject) => {
  //   // 외부 요청 코드

  //   // 성공
  //   resolve("철수") // then의 res 에 철수 가 들어간다

  //   // 실패
  //   reject("에러 발생")
  // }).then((res) => {}).catch(err => {})

  // then().catch() // 성공했을 때 받아오는 것 then  실패시 받아오는 것 catch

  const onClickPromise = () => {
    console.log("여기는 1번 입니다");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는 2번 입니다");
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      }) // return 하면 값이 다음 then 으로 들어간다
      .then((res) => {
        console.log("여기는 3번 입니다");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번 입니다");
        console.log(res);
      });
    console.log("여기는 5번 입니다");
    // 프로미스 체이닝
    // promise 는 큐로 들어가기 때문에 다음에 실행된다
    // 1 > 5 > 2 > 3 > 4 의 순서로 실행된다
  };

  const onClickAsyncawait = async () => {
    // 위에 있는 게 끝나야 아래로 내려간다. 순서가 명확함
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");
    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
  };
  // await 는 프로미스를 await 한다. await 를 사용하려면 뒤에 프로미스가 와야한다.
  // axios.get() 은 리턴값이 promise 다
  // 최근엔 거의 다 리턴값 promise 를 지원

  return (
    <div>
      <button onClick={onClickCallback}>Callback 요청하기</button>
      <button onClick={onClickPromise}>Promise 요청하기</button>
      <button onClick={onClickAsyncawait}>Asyncawait 요청하기</button>
    </div>
  );
}
