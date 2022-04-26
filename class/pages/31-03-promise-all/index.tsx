export default function PromiseAllPage() {
  // 1. 하나하나씩 확인하는 방법
  // const onClickPromise = async () => {
  //   console.time("Promise 시작!!!"); // 걸리는 시간 측정하기
  //   const result1 = await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("https://dog1.jpg");
  //     }, 3000);
  //   });
  //   console.log(result1);

  //   const result2 = await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("https://dog2.jpg");
  //     }, 1000);
  //   });
  //   console.log(result2);

  //   const result3 = await new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("https://dog3.jpg");
  //     }, 2000);
  //   });
  //   console.log(result3);
  //   console.timeEnd("Promise 시작!!!"); // 이름이 똑같아야 측정가능
  // };

  // 2. 한 번에 확인하는 방법
  // 위에서 각각 업로드 하던 파일을 요청해서 받아오는 걸 동시에 기다림
  // 업로드에 걸리는 시간은 각각이지만 업로드가 모두 끝날 때까지 기다린다
  // 한 개씩 업로드 했을 때는 최대 6초지만 여기선 3초로 단축
  // await 가 있기 때문에 모두 받아오고 나서 다음 코드를 실행한다
  const onClickPromiseAll = async () => {
    console.time("Promise.all 시작!!!");

    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );

    // const result = await Promise.all([ // result 는 [] 로 만들어지게 된다
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 1000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 2000);
    //   }),
    // ]);
    console.log(result);
    console.timeEnd("Promise.all 시작!!!");
  };

  return (
    <div>
      {/* <button onClick={onClickPromise}>Promise 연습하기</button> */}
      <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
    </div>
  );
}
