// 콜라츠 추측

// for문 사용하기
function solution(num) {
  // 1이 될 때까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) {
      return answer;
    }
    answer++;
    //num이 짝수일 때 : 해당 수에 2를 곱한다
    if (num % 2 === 0) {
      num /= 2; // num = num / 2
    } else {
      // num이 홀수일 때 : 해당 수에 3을 곱하고 1을 더한다
      num = num * 3 + 1;
    }
  }
  return -1;
}

// while문 사용하기 > 얼마나 돌려야할지 모를 때 사용하면 좋다
function solution(num) {
  let answer = 0;

  // 조건식이 true 일 때만 반복 로직이 실행
  while (num !== 1) {
    // num이 1이 될 때까지 무한으로 실행한다.
    if (answer >= 500) {
      // 무한반복 주의! 증감식과 조건식을 잘 사용해야한다
      // 500번 이상 실행했다면
      return -1;
    }
    answer++;
    num =
      num % 2 === 0
        ? num / 2 // 짝수일 경우
        : num * 3 + 1; // 홀수일 경우
  }
  return answer;
}

// reduce 사용하기
function solution(num) {
  let answer = 0;

  const result = new Array(500).fill(1).reduce((acc) => {
    // 500번 실행
    if (acc !== 1) {
      // acc가 1이 아닐 때만 실행
      answer++;
      return acc % 2 === 0
        ? acc / 2 // 짝수일 때
        : acc * 3 + 1; // 홀수일 때
    } else {
      // 최종적으로 1을 리턴
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}

// 구글링
function solution(num) {
  // 1이 될 때까지 반복한 횟수
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      return (answer = i);
    }
  }
  return (answer = -1);
}
