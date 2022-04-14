// 모의고사

// 1번 수포자가 찍는 방식
// 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ... (5개)

// 2번 수포자가 찍는 방식
// 2, 1, 2, 3, 2, 4, 2, 5, 2, 1 ... (8개)

// 3번 수포자가 찍는 방식
// 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3 ... (10개)

// for문 돌리기
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5], // 5
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 8
  // 3번 수포자가 찍는 방식
  [3, 3, 2, 2, 1, 1, 4, 4, 5, 5], // 10
];

function solution(answers) {
  // answer 는 학생들의 점수를 저장하는 배열
  const answer = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerTable.length; l++) {
      if (answerTable[l][i % answerTable[l].length] === answers[i]) {
        answer[l]++;
      }
    }
  }

  const biggest = Math.max(...answer);
  const result = [];

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === biggest) result.push(i + 1);
  }
  return result;
}

// 메서드 사용하기
const answerTable = [
  // 1번 수포자가 찍는 방식
  [1, 2, 3, 4, 5], // 5
  // 2번 수포자가 찍는 방식
  [2, 1, 2, 3, 2, 4, 2, 5], // 8
  // 3번 수포자가 찍는 방식
  [3, 3, 2, 2, 1, 1, 4, 4, 5, 5], // 10
];

function solution(answers) {
  const scoreList = answerTable.map((el, i) => {
    // 찍은 번호가 정답과 일칳는지 확인하고 학생들의 점수를 합산
    const score = answers.reduce((acc, cur, i) => {
      return acc + (el[i % el.length] === cur ? 1 : 0);
    }, 0);
    return { student: i + 1, score: score };
  });
  const biggest = Math.max(
    ...scoreList.map((el) => {
      return el.score;
    })
  );

  return scoreList
    .filter((el) => {
      return el.score === biggest;
    })
    .map((el) => el.student);
}
