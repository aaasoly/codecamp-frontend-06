// 문자열의 대소관계는 아스키 코드를 기준으로 분류한다
// 1. 각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.
// 2. 문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교
// .charCodeAt() 을 쓰면 유니코드를 확인할 수 있다

// sort
// // 1 배열에서만 사용이 가능하다
// // 2 문자열, 숫자릴 내림차순 또는 오름차순으로 정렬할 수 있다

// arr.sort((a,b) => {
//   return a > b ? -1 : 1 // 오름차순
//   return a > b ? 1 : -1 // 내림차순

// })

// function solution(s) {
//     // 배열로 만들어 주기
//     const answer = [];

//    for(let i = 0; i < s.length; i++){
//        answer.push(s[i])
//    } // const answer = s.split("") 와 같은 의미

//     answer.sort((a,b) => {
//         return a > b ? -1 : 1
//     })

//     let result = "";
//     for (let i = 0; i <answer.length; i++) {
//         result += answer[i]
//     }
//         return result

//   /// 리펙토링
//   function solution(s) {
//     const answer = s.split("")
//                     .sort((a,b) => {
//                       return a > b ? -1 : 1;
//                     })
//                     .join("")
//     return answer
// }

///// K번째 수 for 문 풀이
function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    // array 를 i 번째부터 j 번째까지 자른 결과를 저장
    const result = array.slice(i - 1, j).sort((a, b) => {
      // return a - b; //오름차순
      return a > b ? 1 : -1;
    });
    answer.push(result[k - 1]);
  }
  return answer;
}

///// K번째 수 메서드 이용 풀이
function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
      return a - b; // 오름차순
      //return a > b ? 1 : -1
    });
    return result[el[2] - 1];
  });

  return answer;
}

// el[1] = j 번째
// el[2] = k 번째

arr = [1, 2, 10, 100, 1000, 3];

arr.sort((a, b) => {
  // 문자열, 숫자 정렬에 작동한다
  return a > b ? -1 : 1; // 내림차순
  return a > b ? 1 : -1; // 오름차순

  // 아래 방식은 문자열 방식에서 작동하지 않는다
  // return b-a // 내림차순
  // return a-b // 오름차순
});
