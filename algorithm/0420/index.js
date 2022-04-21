// 시저 암호

// 대소문자 합쳐서
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " "; // s[i]
    } else {
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25
          ? alphabet.substring(26) // 대문자에 해당하는 문자열을 잘라온다.
          : alphabet.substring(0, 26); // 소문자에 해당하는 문자열을 잘라온다.
      idx = word.indexOf(s[i]) + n;

      // idx 가 26을 넘어가면 word[idx === undefined 가 뜸. 1로 돌아가 다시 시작하도록 만들어준다.
      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// 대소문자 구별
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]; // " "
    } else {
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

// reduce 사용하기
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  const answer = s
    .split("") // 쪼개서 배열 만들기
    .reduce((acc, cur) => {
      const word = lower.includes(cur) ? lower : upper;
      let idx = word.indexOf(cur) + n;
      // if(word[idx] === undefined) {
      if (idx >= 26) {
        idx -= 26;
      }

      return acc + (cur === " " ? " " : word[idx]);
    }, ""); // 빈문자열을 초기값으로 넣기
  return answer;
}

// 아스키코드로 풀기
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    let idx = s[i].charCodeAt() + n;
    if (idx > 122 || (idx > 90 && idx - n < 97)) {
      // 소문자 z(122)를 넘어가거나
      // 대문자 Z(90)을 넘어가면서 소문자 a(97)를 넘어가지 않을 때
      idx -= 26;
    }
    answer += String.fromCharCode(idx);
  }
  return answer;
}

// 대문자 : 65(A) ~ 90(Z)
// 소문자 : 97(a) ~ 122(z)

String.fromCharCode(); // 아스키 코드를 넣으면 문자열로 바꿔줌
