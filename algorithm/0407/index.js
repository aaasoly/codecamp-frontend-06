// 요일 구하기
// 고정 되어있는 데이터를 보자 : 요일(7개)

// for문으로 풀기
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = 0;
  for (let i = 1; i < a; i++) {
    // console.log(i, month[i])
    answer += month[i]; // 구하려는 날짜까지 지난 일수 더해주기
  }
  answer += b - 1; // 1월 1일을 제외해줘야한다

  return week[answer % 7]; // 모두 더한 날짜를 7로 나눈 나머지를 인덱스로 접근
}

// reduce 사용하기
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i; // 월
    return (
      acc +
      (mn !== a
        ? // a월 이전일 때
          month[mn]
        : // a월 일 때
          b - 1) // 1월 1일 제외
    );
  }, 0);
  return week[answer % 7];
}

// new Date 사용하기
// Date() // 현재 날짜 return, string 타입
// new Date() // 현재 날짜 return, object 타입
// new Date(2016, 5-1, 24)

// .getFullYear()
// .getMonth()+1
// .getDate()

// .getDay() // 일요일(기준)로부터 며칠이 지났는지 알려준다

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]; // 일요일이 기준이므로 바꿔주기

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];
}
