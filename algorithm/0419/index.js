// for문 돌리기
function solution(n, lost, reserve) {
  // lost 데이터가 filter 되기 이전의 데이터를 저장
  const losted = [...lost];

  // lost에만 있는 학생만 남기기 + 오름차순 정리
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);

  // reserve에만 있는 학생 남기기 + 오름차순 정리
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  // 초기값(체육수업을 들을 수 있는 학생) = 전체 학생 - 잃어버린 학생 수
  let answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    // 잃어버린 학생의 앞번호 학생이 여벌 체육복이 있는지 검사
    if (reserve.includes(lost[i] - 1)) {
      // 앞번호 학생의 index 값을 가져와서 지워준다
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;

      // 뒷번호 학생이 여벌 체육복이 있는지 검사
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

//
//
// reduce 사용하기
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);
  let answer = n - lost.length;

  return lost.reduce((acc, cur) => {
    // 앞에 있는 학생이 여벌 체육복을 가지고 있는지
    const prev = reserve.indexOf(cur - 1);
    // 뒤에 있는 학생이 여벌 체육복을 가지고 있는지
    const next = reserve.indexOf(cur + 1);

    if (prev !== -1) {
      // 앞에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(prev, 1);
      acc++;
    } else if (next !== -1) {
      // 뒤에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(next, 1);
      acc++;
    }
    return acc;
  }, answer);
}
