// splice

// arr.splice( 제거를 시작할 인덱스, 제거할 개수, 추가하고 싶은 데이터 )

// 1. 배열 메서드
// 2. 원하는 위치(인덱스)의 데이터를 제거하거나 추가할 수 있다.
// 3. 원본이 저장
// 4. 제거한 값을 반환
// arr.splice() 를 변수에 담아줄 경우 제거 된 데이터가 들어오므로 굳이 변수에 담아줄 필요가 없다

// splice 사용
function solution(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
    if (participant.includes(completion[i])) {
      participant.splice(participant.indexOf(completion[i])), 1;
    }
  }
  return participant[0];
}

//for문
function solution(participant, completion) {
  const answer = {};

  // 1. 참가한 선수의 이름과 참가자 수를 정리
  for (let i = 0; i < participant.length; i++) {
    answer[participant[i]] === undefined
      ? (answer[participant[i]] = 1)
      : answer[participant[i]]++;
  }

  // 2. 완주한 명단에서 선수 이름 제거
  for (let i = 0; i < completion.length; i++) {
    if (answer[completion[i]]) {
      answer[completion[i]]--;
    }
  }

  // 3. 완주하지 못한 선수 이름 반환
  for (let key in answer) {
    if (answer[key] !== 0) {
      return key;
    }
  }
}

// sort 로 풀기
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// filter로 풀기
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  const answer = participant.filter((name, i) => {
    return name !== completion[i];
  });
  return answer[0];
}

// 내가 푼 것
function solution(participant, completion) {
  let answer = "";

  let P = participant.sort();
  let C = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (P[i] !== C[i]) {
      return P[i];
    }
  }
  return (answer = P[i]);
}
