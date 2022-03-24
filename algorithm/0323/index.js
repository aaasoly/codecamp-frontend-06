
//////////
function solution(seoul) {
  //// indexOf로 찾기
  const x = seoul.indexOf("Kim")
  return `김서방은 ${x}에 있다`

  //// for문으로 찾기
  // for ( let i = 0; i < seoul.length; i++){
  //   if(seoul[i] === "Kim"){
  //       return `김서방은 ${i}에 있다`
  //       // return 반복문이 중단됨과 동시에 함수도 종료
  //       // break;
  //   }
  // } 
}

////////// 
function solution(s) {
  if(s.length !== 4 && s.length !== 6){
      return false
  }
  
  for( let i = 0; i < s.length; i++ ) {
      if( isNaN(s[i]) === true ){
          return false
      } else {
          return true
      }
  }
}

// 다른 풀이
function solution(s) {
  if(s.length !== 4 && s.length !== 6){
      return false
  }           // s 값을 배열로 만들기
  const answer = s.split("") 
                  .filter( num => {
                     // 데이터가 숫자가 아닌 문자일 경우에만 남긴다
                     // isNaN 의 결과가 true 값인 경우(NaN 값인 경우)
                    return isNaN(num) === true
                  })
  return answer.length === 0
}


//// isNaN 과 Number.isNaN
let str = "123"

isNaN("b123") // true
Number.isNaN(Number("b123")) // true

isNaN("a") //true
Number("a") //NaN

isNaN("0/0") // true 문자열로 넣어줬지만 자동으로 숫자타입으로 변환
Number.isNaN("0/0") // false 들어온 인자가 숫자가 아니기 때문에
Number.isNaN( 0/0 ) // true

isNaN( undefined ) // true
Number.isNaN( undefined ) // false

// NaN : Number(str), 0/0

// isNaN 
// 1. 숫자가 맞는지 검증하는 함수 
// 2. 숫자가 맞다면(NaN이 아니라면) false, 
//   숫자가 아니라면(NaN이라면) true
// 3. 숫자 타입으로 변환된다

// Number.isNaN
// 1. 숫자가 맞는지를 검증, 들어오는 인자가 숫자타입이여만 하고
//		결과가 NaN값이 맞는 지를검증
// 2. isNaN 보다 엄격하게 NaN 값을 검증

// isNaN은 숫자인지 문자인지를 검증
// Number.isNaN은 이 데이터가 정말 NaN 값이 맞는지 검증


//////// 약수의 합 구하기
function solution(n) {
  let answer = 0;
  
  for ( let i = 1; i <= n; i++){
    if ( n % i === 0){
      answer += i
    }
  }
  return answer
}

//// 다른 풀이
function solution(n) {
  let answer = n; // answer 에 자기 자신을 미리 저장
  
                  // for문 진행 횟수를 줄일 수 있음! 
  for ( let i = 1; i <= n / 2; i++){
    if ( n % i === 0){
      answer += i
    }
  }
  return answer
}

/// 다른 풀이
function solution(n) {
  const answer = new Array(n)
  .fill(1)
  .reduce((acc, cur, i) => {
      return n % (cur + i) === 0
        // 약수가 맞다면 약수를 더한 값을 다음으로 넘겨주고
        ? acc + (cur + i)
        // 약수가 아니라면 더하지 않고 그냥 다음으로 넘겨준다
        : acc
  },0)
  return answer
}

// new Array(n).fill(1) /// 숫자 타입을 받아왔을 때 빈 배열을 만들고 채워서 쓸 수 있게 만들어주는 함수