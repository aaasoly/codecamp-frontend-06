// 프로그래머스 예산 문제

// for
function solution(d, budget) {
  const answer = [];

  //부서가 신청한 금액을 오름차순 형태로 정렬
  d.sort((a, b) => a - b);

  //부서들이 신청한 금액의 총합
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}

// while
function solution(d, budget) {
  //부서가 신청한 금액을 오름차순 형태로 정렬
  d.sort((a, b) => a - b);

  let answer = 0; // 최초식

  // 괄호 안에는 조건식, 예산이 -값이 아닐 때까지
  while (budget - d[answer] >= 0) {
    // answer값을 d 의 index 로 사용
    console.log(budget, d[answer], answer);
    budget -= d[answer]; // 예산에서 각 부서의 금액을 차례로 빼줌
    answer++; // answer 증가로 d의 모든 데이터 순환
  }

  return answer;
}

// 메서드 사용하기(sort, filter, length)
function solution(d, budget) {
  //부서가 신청한 금액을 오름차순 형태로 정렬
  return d
    .sort((a, b) => a - b)
    .filter((money) => {
      // 총 예산에서 부서별 지원금을 삭감
      budget -= money;
      return budget >= 0;
    }).length;
}
