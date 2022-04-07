// 행렬의 덧셈

// for문
function solution(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      const sum = arr1[i][j] + arr2[i][j];
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      answer[i][j] = sum;
    }
  }
  return answer;
}

// 메서드 map
function solution(arr1, arr2) {
  const answer = arr1.map((num1, i) => {
    //console.log(num1, arr2[i])
    const result = num1.map((num2, l) => {
      //console.log(num2, arr2[i][l])
      return num2 + arr2[i][l];
    });
    return result;
  });
  return answer;
}
// 안쪽에 있는 map 이 배열 형태로 반환되고
// 바깥에 있는 map 이 그 배열을 다시 배열 형태로 반환하는 구조

// 내풀이
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let result = [];
    for (let j = 0; j < arr1[i].length; j++) {
      result.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(result);
  }
  return answer;
}
