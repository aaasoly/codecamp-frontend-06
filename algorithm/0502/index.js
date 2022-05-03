const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

// 문자열 메서드 사용하기
function solution(new_id) {
  // 1단계 : 모든 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }
  // 3단계 : 마침표가 2번 이상 연속 된다면, 하나의 마침표로 치환 (.. => .)
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  // 4단게 : 마침표가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer = answer.substring(1);
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a"를 대입
  if (answer === "") {
    answer = "a";
  }

  // 6단계 : 길이가 16자 이상이라면, 15글자까지 자른 후
  //        마침표가 문자열 끝에 위치하면 제거
  if (answer.length >= 16) {
    answer = answer.substring(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열의 길이가 2자 이하라면, 마지막 글자로 3글자까지 채운다
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  return answer;
}

// str = "" // ""
// str === "" // true

// arr = [] // []
// arr === [] // false

// arr[1] = 1 // 1
// arr[0] = undefined // [ <1 empty item>, 1 ]

// // arr[0] === undefined 가 true 값을 반환하긴 하지만
// // 빈배열 검증은 반드시!! length 값을 이용해야 한다
// arr.length === 0

const filterStr = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

// 배열 메서드 사용하기
function solution(new_id) {
  // 1단계 : 모든 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계 : 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자를 제거
  let answer = new_id.split("").filter((str) => filterStr.includes(str));

  // 3단계 : 마침표가 2번 이상 연속 된다면, 하나의 마침표로 치환 (.. => .)
  answer = answer.filter(
    (str, i) => str !== "." || (str === "." && answer[i + 1] !== ".")
  );

  // 4단게 : 마침표가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer = answer.slice(1);
    // answer.shift()
  }
  const removeLastDot = () => {
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
      // answer.pop()
    }
  };
  removeLastDot();

  // 5단계 : 빈 문자열이라면 "a"를 대입
  if (answer.length === 0) {
    // answer.push("a")
    answer = ["a"];
  }

  // 6단계 : 길이가 16자 이상이라면, 15글자까지 자른 후
  //        마침표가 문자열 끝에 위치하면 제거
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  // 7단계 : 문자열의 길이가 2자 이하라면, 마지막 글자로 3글자까지 채운다
  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    // answer = answer.concat(add)
    answer = [...answer, ...add];
  }
  return answer.join("");
}
