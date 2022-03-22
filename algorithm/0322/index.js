// function add(){
//   const a = 1
//   const b = 2
  
//   console.log(a+b)
// }
// add()

//// 알고리즘 프로그래머스

// /// 짝수 홀수 나누기
// function solution(num) {
//   	if( num % 2 === 0) {
//       return "Even"
//     } 
// // 나머지가 1일 경우. else 문 붙이지 않아도 괜찮음
//   		return "Odd"
// }
//  solution(0)

// /// 짝수 홀수 삼항 연산자로 쓰기
// function solution(num) {
//   return num % 2 === 0 ? "even" : "odd"
// }


///// 평균구하기
// function solution(arr) { // reduce((누적값,현재값) => 누적값+현재값 )
//     const answer = arr.reduce((acc,cur) => acc+cur) / arr.length;
//   	return answer
// }

// const array = []
// solution(array)

// function solution(arr) {
//   let answer = 0
//   for ( let i = 0; i < arr.length; i++){
//     answer += arr[i]
//   }
//   return answer / arr.length
// }


//// 가운데 글자 반환하기
function solution(s) {
  // Math.floor = 내림처리(소수점을 제거)
  const center = Math.floor(s.length / 2)
  let answer = s[center];
  if ( s.length % 2 === 0 ){
      // 짝수 문자열일 경우에는 가운데 인덱스로부터
      // 앞에 있는 인덱스의 문자까지 추가해서 리턴한다
      answer = s[center - 1] + answer
  }
  return answer
}
/// 리팩토링
function solution(s) {
  // Math.floor = 내림처리(소수점을 제거)
  const center = Math.floor(s.length / 2)
  console.log(center)
  return s.length % 2 === 1
          ? s[center]// 홀수 문자열
          : s.slice( center - 1, center + 1 ) // 짝수 문자열
}
