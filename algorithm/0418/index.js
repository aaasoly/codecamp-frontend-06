str = "12345";
str.replace("2", "two");

// replace

// 1. 문자열 메서드
// 2. 첫번째 인자의 데이터를 두번째 인자의 데이터로 변경
// 3. 가장 앞에 있는 데이터만 변경된다
// 3-1. replaceAll 을 사용하면 해당하는 모든 데이터를 변경할 수 있다
//      최근에 나온 문법이므로 프로그래머스에서는 사용할 수 없다

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// replace 와 while을 사용해서 replaceAll 만들기
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    while (s.includes(numbers[i])) {
      // 해당하는 값이 없을 때까지 반복
      console.log(s, numbers[i]);
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}

// forEach, split, join 사용하기
function solution(s) {
  numbers.forEach((str, i) => {
    s = s.split(str).join(i);
  });
  return Number(s);
}

// 정규표현식 사용하기
function solution(s) {
  s = s.replace(/zero/g, 0);
  s = s.replace(/one/g, 1);
  s = s.replace(/two/g, 2);
  s = s.replace(/three/g, 3);
  s = s.replace(/four/g, 4);
  s = s.replace(/five/g, 5);
  s = s.replace(/six/g, 6);
  s = s.replace(/seven/g, 7);
  s = s.replace(/eight/g, 8);
  s = s.replace(/nine/g, 9);
  return Number(s);
}

// for 와 정규표현식 사용하기
function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}

// 정규표현식에는 변수를 할당할 수 없지만
// new RegExp를 사용해서 변수를 할당해 줄 수 있다
