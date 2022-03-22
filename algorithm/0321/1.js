function solution(s) {
  var answer = 0;
  if (s.length <= 5 && s.length >=1 && s.charAt(0) !== "0" ) {
      answer = Number(s)
  } else {
    return "잘못된 숫자입니다."
  }
  return answer;
}

solution("1234")