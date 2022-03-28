// p와 y의 개수 정하기
function solution(s) {
  // p 와 y 의 개수를 저장하는 변수
  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++;
    } else if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
    return p === y;
  }
}

// 리팩토링 : 문자열을 소문자(대문자)로 변경하기
function solution(s) {
  s = s.toLowerCase(); // 문자열 전체 소문자로 변경 > 소문자만 검증
  // s = s.toUpperCase();

  // p 와 y 의 개수를 저장하는 변수
  let p = 0;
  let y = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p++;
    } else if (s[i] === "y") {
      y++;
    }
  }
  return p === y;
}

// 리팩토링
function solution(s) {
  // p와 y의 개수를 저장하는 객체
  const check = {};
  s.toLowerCase() // 1 소문자로 변환
    .split("") // 2 배열로 변환
    .forEach((str) => {
      // 3 배열 메서드인 forEach 사용
      check[str] === undefined
        ? (check[str] = 1) // 없다면 초기값 1로 지정
        : check[str]++; // 있다면 기존값에 1을 더한다
    });
  return check.p === check.y;
}

// forEach 와 map 의 차이
// forEach 는 return 값이 무조건 undefined
// map은 배열 형태로 반환한다
// forEach 사용할 때 상수/변수에 저장하지 말기!!(undefined)

// 이상한 문자 만들기
function solution(s) {
  let answer = "";

  // 단어별로 인덱스를 구분하기 위한 변수
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      // 공백을 만났을 경우
      answer += s[i]; // " "
      idx = 0; // idx 값 초기화
    } else {
      answer +=
        idx % 2 === 1
          ? s[i].toLowerCase() // 홀수일 때는 소문자 로 변환해서 넣어준다
          : s[i].toUpperCase(); // 짝수일 때는 대문자로 변환해서 넣어준다
      idx++;
    }
  }
  return answer;
}

function solution(s) {
  const answer = s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}
