// 제일 작은 수 제거하기

function solution(arr) {
  // const answer = []

  // 1. 제일 작은 수 찾기
  const min = Math.min(...arr);
  //let min = arr[0]
  //for( let i = 1; i < arr.length; i++){
  //min 의 기준이 arr[0] 이므로 불필요한 반복을 피하기 위해 i = 1 로 셋팅
  //  if(arr[i] < min){
  //      min = arr[i]
  //  }
  // }

  // 2. 제일 작은 수를 제거
  const answer = arr.filter((num) => {
    return num !== min; // 동일하지 않는 값만 남김
  });
  //for(let i = 0; i < arr.length; i++){
  //    if(arr[i] !== min){
  //        answer.push( arr[i] )
  //    }
  // }
  // 3. 빈배열인지 체크한다.
  return answer.length === 0 ? [-1] : answer;
}
