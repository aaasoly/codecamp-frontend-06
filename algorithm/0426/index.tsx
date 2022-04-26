// //////// 3진법 뒤집기
// a = 45
// String(a)
// a.toString(3) : 10진수에서 n 진수로

// b = '0012'
// parseInt( b, 3 ) : n 진수에서 10진수로 바꿔준다

// parseInt 사용하기
function solution(n) {
  // 3진법으로 변환
  n = n.toString(3);

  let answer = "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  return parseInt(answer, 3);
}

// 메서드 사용
function solution(n) {
  // 3진법으로 변환.쪼갬.반전.다시이어붙임
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}

// //////// 이진 변환 반복하기

function solution(s) {
  let count = 0; // "1"이 나올 때까지 시도한 횟수
  let remove = 0; // "0"을 제거한 총 횟수

  // while은 조건이 true 일 때만 실행한다
  // 원하는 값이 나올 때까지 반복문을 돌리고 싶다면 while 을 사용하자
  // 무한루프를 방지하기 위해 조건식을 잘 설정해줘야한다
  while (s !== "1") {
    count++;

    let temp = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        remove++;
        continue;
      }
      temp += s[i];
    }
    const num = temp.length;
    s = num.toString(2);
  }
  return [count, remove];
}

// 재귀함수 (recursion)

// 1. 자기 자신을 계속해서 반복하는 함수
// 2. 원하는 결과가 나올 때까지 무한하게 반복한다
// 3. while 문법을 대체할 수 있다

/// count 가 5가 될 때까지 반복하는 재귀함수
// let count = 0
// function recursion() {
//   if(count === 5){
//     return
//   }
//   count++

//   return recursion()
// }

function solution(s) {
  // 비구조화할당으로 변수 선언하기
  let [count, remove] = [0, 0];

  function recursion() {
    if (s === "1") {
      return [count, remove];
    }
    count++;

    // "0" 제거하고 숫자 카운트
    remove += s.split("").filter((el) => el === "0").length;
    // "1" 만 남긴다
    s = s.split("").filter((el) => el === "1").length;
    s = s.toString(2); // 2진법으로 변환

    return recursion();
  }

  return recursion();
}
