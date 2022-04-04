// 두 정수 사이의 합
function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return b;
  } else {
    // 최소값(반복문을 실행할 때 설정되는 초기값 : a 와 b 중 작은 값이 들어온다)
    // const min = a > b ? b : a
    const min = Math.min(a, b);

    // 최대값(반복문이 종료되는 조건을 설정 : a 와 b 중 큰 값이 들어옴)
    // const max = a > b ? a : b
    const max = Math.max(a, b);

    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

// reduce 쓰기
function solution(a, b) {
  if (a === b) {
    return b;
  }
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const answer = new Array(max - min).fill(1).reduce((acc, cur, i) => {
    const num = min + cur + i;
    return acc + num;
  }, min);
  // 초기값을 작은 값으로 넣어서 작은 값을 미리 더해준다

  return answer;
}

function solution(a, b) {
  const min = Math.min(a,b)
  const max = Math.max(a,b)
  
  const answer = new Array( (max - min) + 1 )
                    .fill(1)
                    .reduce((acc, cur, i) => {
                        const num = min +i
                  ₩     return acc + num
                    }, 0)
  // 예외처리 따로 안해줌
  
  return answer;
}


// 제곱근 찾을때
function solution(n) {
  let answer = -1 // 제곱근을 찾지 못했을 때
  
  for( let i = 1; i * i <= n; i++){
      if(i*i === n){
          // 제곱근을 찾은 경우
          answer = i + 1
          return answer * answer
      }
  }
  return answer
}

// ** : 거듭제좁근 연산자
// Math.pow(a, b) : a 를 b만틈 제곱하는 메소드
// Math.sqrt() : 제곱근을 찾아주는 메서드
// Number.isInteger : 정수 판별 메서드, boolean 값 반환

function solution(n) {
  let answer = [] // 치초식
  while( answer ** 2 < n)
   answer++
         
         {
          answer ++ 9 = /중간식
     return answer ** === n
          ? (answer + 1) ** 2
  :-1
          }
}
// 먼가 이상한디..

// sqrt 메서드 사용
function solution(n) {
  let sqrt = Math.sqrt(n)
  if(Number.isInteger(sqrt)){
      // 제곱근이 맞는 경우 (=정수인 경우) true 반환
      return (sqrt + 1) ** 2
   } else {
       // 제곱근이 아닌 경우(=정수가 아닌 경우) false 반환
       return -1
   }
}
// 한 줄로 정리
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n)+1) ** 2 : -1
}