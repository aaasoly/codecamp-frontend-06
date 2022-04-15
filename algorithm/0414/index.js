// for문
function solution(n) {
  // 피보나치 수열들을 저장하는 배열
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }

  return answer[n];
}

// number === Int
// js는 2의 53제곱에 1을 뺀 값까지만 출력해준다.
// Number.MAX_SAFE_INTEGER 정상 범위를 알려주는 메서드
// Number.isSafeInteger(a) 정상 범위에 속해 있는지 알려주는 메서드

// ((a % c) + (b % c)) % c 의 나머지 값은
// (a + b) % c 의 나머지 값과 같다

// reduce 사용하기
function solution(n) {
  let prev = 0; // 0번째 피보나치 수의 결과
  let next = 1; // 1번째 피보나치 수의 결과
  let sum = prev + next; // 2번째 피보나치 수의 결과
  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    sum = (prev + acc) % 1234567; // 현재 피보나치 숫자
    prev = acc; // n-2
    next = sum; // sum 누적

    return sum;
  }, sum);
  return answer;
}

// 내가 푼 것
function solution(n) {
  const arr = [0, 1];
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    answer = ((arr[i - 1] % 1234567) + (arr[i - 2] % 1234567)) % 1234567;
  }
  return answer;
}
