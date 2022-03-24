//// 자릿수 더하기
function solution(n)
{
    let answer = 0;
    // 인덱스 값으로 접근하기 위해 문자열 타입으로 변환 > for문 사용 가능
    n = String(n);
    
    for( let i = 0; i < n.length; i++ ){
        // console.log(i, n[i]) // 배열 n은 인덱스를 갖게 됨, 인덱스 값으로 숫자를 가져올 수 있음
        answer += Number(n[i]); // n 이 string 이기 때문에 number 로 변경
    }
    return answer
}

// reduce 사용하기
function solution(n) {
  const answer = n.toString() 
  // reduce 는 배열에 사용 가능하기 때문에 문자열로 변환, String() = .toString()
                  .split("") // 문자열을 쪼개서 배열로 변환
                  .reduce((acc, cur) => { 
                      return acc + Number(cur) // cur은 string이기 때문에 숫자로 변환
                  }, 0)
                  // 초깃값이 0이면 acc 가 0 을 반환하기 때문에 number 이지만,
                  // 초깃값 0을 지워주면 acc 도 string 이기 때문에 number로 변환해야 함
  return answer
}

// String : 변수에 담지 않아도 사용 가능
// .toString() : 변수에 담긴 배열에서만 사용 가능



///x만틈 간격이 있는 n개의 숫자
function solution(x, n) {
  const answer = [];
  
  for( let i = 1; i <= n; i++ ){
      answer.push( i * x )
  }
  return answer;
}

/// map 사용하기
function solution(x, n) {
  const answer = new Array( n ) // Array 안에 요소 n개가 있는 배열을 만듦
                     .fill( 1 ) // fill 로 배열 안을 채워줌
                     .map( (num, i) => { // 1로 채워진 배열에 map 실행, 두번째 인자 i는 인덱스값   
                        return (num+i) * x // map에 return이 없으면 무조건 undefined 반환
                      })
  return answer
}

// 빈 배열 만드는 법 기억하기
// new Array 와 fill