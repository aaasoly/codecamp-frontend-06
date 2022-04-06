// 하샤드 수 구하기
function solution(x) {
  let answer = 0;

  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    answer += Number(x[i]);
  }
  return x % answer === 0 ? true : false;
}

// 인덱스를 사용하려면 문자열로 바꿔줘야한다는 점 잊지 말기! String / .toString()
// 문자 타입과 숫자 타입으로 나누면 숫자 타입으로 반환

// 메서드 쓰기
function solution(x) {
  // 문자열로 변경 > 문자열 쪼개주기 > reduce
  const answer = x
    .toString()
    .split("")
    .reduce((acc, cur) => {
      return Number(acc) + Number(cur);
    }); // reduce 초기값으로 0을 주면 acc는 Number로 감쌀 필요가 없다
  return x % answer === 0;
}
