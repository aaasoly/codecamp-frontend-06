function solution(n, m) {
  // 최대공약수 : 두 개의 수의 약수 중에서 (공통되는) 제일 큰 수
  // 최소공배수 : 두 개의 수의 배수 중에서 (공통되는) 제일 작은 수

  const biggest = Math.max(n, m);
  // 최대공약수 구하기
  let max = 0;
  for (let i = 1; i <= biggest; i++) {
    if (n % i === 0 && m % i === 0) {
      max = i; // 제일 큰 값이 max에 들어간다
    }
  }

  // 최소공배수 구하기
  let min = 0;
  for (let i = biggest; i <= n * m; i += biggest) {
    if (i % Math.min(n, m) === 0) {
      min = i;
      break;
    }
  }

  return [max, min];
}

// 유클리드 호제법
function solution(n, m) {
  // 유클리드 호제법
  // 최대 공약수를 구하기 위한 알고리즘(공식)
  // a를 b로 나눴을 때 (a가 b보다 큰 경우) = 큰 수에서 작은 수를 나눴을 때
  // 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.
  // 나머지 값이 0이 되지 않으면, 작은 수(b)가 큰 수(a)가 되고,
  // 나머지 값이 작은 수(b)가 된다.

  // 위의 방식을 반복했을 때 나머지 값이 0이 되면, 작은 수(b)가 최대공약수가 된다.

  let a = Math.max(n, m); // 큰 수
  let b = Math.min(n, m); // 작은 수
  let r = 0; // 나머지

  // 조건이 true가 될 때까지 무한하게 실행
  while (a % b > 0) {
    r = a % b; // 나머지 값 저장
    a = b; // 큰 수에 작은 수를 할당
    b = r; // 작은 수에 나머지값 할당
  }
  return [b, (n * m) / b];
}
