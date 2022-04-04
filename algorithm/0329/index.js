// 배열 뒤집기

// for문 사용하기
function solution(n) {
  const answer = [];
  n = String(n);

  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}

// 메소드 사용하기
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return Number(str);
    });
}

// String : 변수에 담지 않아도 사용 가능
// .toString() : 변수에 담긴 배열에서만 사용 가능
// 123.toString() 불가 num=123; num.toString() 으로 가능

// 나누어 떨어지는 숫자배열
// for문 사용하기
function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 // 빈배열인지 검증
    ? [-1] // 빈배열인 경우 -1
    : answer.sort((a, b) => a - b); // 빈배열이 아닌 경우 오름차순 정리
}

// 메소드 사용하기
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return num % divisor === 0;
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 빈배열 검증하기
// answer[0] === undefined 로 써도 검증은 되지만 값을 undefined로 설정해둘 경우
// 빈배열이 아니어도 비어있게 되기 때문에 answer.length === 0 을 쓰자
