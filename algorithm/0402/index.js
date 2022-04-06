// for 문으로 풀기
function solution(absolutes, signs) {
  let answer = 0;

  // 배열의 길이가 같다면 동일한 인덱스로 접근할 수 있다
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer -= absolutes[i];
    }
  }
  return answer;
}

// 삼항 연산자로 풀기
function solution(absolutes, signs) {
  let answer = 0;

  // 배열의 길이가 같다면 동일한 인덱스로 접근할 수 있다
  for (let i = 0; i < signs.length; i++) {
    answer += signs[i] ? absolutes[i] : -absolutes[i];
  }
  return answer;
}

// 메소드 사용하기
function solution(absolutes, signs) {
  // 배열의 길이가 같기 때문에 어떤 배열을 reduce로 돌려도 상관없다
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);
  return answer;
}

// console.log(acc, cur, signs[i])
// 0 1 false
// undefined 2 false
// undefined 3 true
