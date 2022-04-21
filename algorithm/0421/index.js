// 실패율

// 객체에 데이터 저장해서 구하기
function solution(N, stages) {
  // 모든 스테이지 번호를 오름차순으로 정렬
  stages.sort((a, b) => a - b);

  const infos = []; // 각각의 스테이지의 정보를 저장
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i, // 현재 스테이지의 번호
      users: 0, // 해당 스테이지를 클리어하지 못한 유저의 수
      fail: 0, // 스테이지에 실패율
    });
  }

  let allUsers = stages.length; // 모든 유저의 수(초기값)
  for (let i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;

      // 현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않을 때
      // 즉, 현재 스테이지 유저의 합산이 완료되는 시점
      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;

        infos[stages[i] - 1].fail = fail;
      }
    }
  }
  return infos
    .sort((a, b) => {
      return b.fail - a.fail; // 내림차순
    })
    .map((el) => {
      return el.stage;
    });
}

// indexOf, lastIndexOf
function solution(N, stages) {
  // 모든 스테이지 번호를 오름차순으로 정렬
  stages.sort((a, b) => a - b);

  let allUsers = stages.length;
  const answer = new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i; // 현재 스테이지 번호
      const arr = stages.slice(
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = arr.length / allUsers;
      allUsers -= arr.length;

      // stage: stages, fail: fail
      // short-hand-property
      return { stage, fail };
    })
    .sort((a, b) => {
      return b.fail - a.fail; // 내림차순
    })
    .map((el) => el.stage);
  return answer;
}

//
//
// .indexOf("찾고 싶은 값", "탐색을 시작할 인덱스") 배열의 앞에서부터 원하는 값 탐색 후 인덱스 반환
// .lastIndextOf("찾고 싶은 값", "탐색을 시작할 인덱스") 배열의 뒤에서부터 원하는 값 탐색 후 인덱스 반환
// 오름/내림 차순으로 정리된 배열이 주어졌을 때 두 메서드를 사용해서 그 값이 포함된 범위를 구할 수 있다

arr = [1, 2, 2, 2, 3, 4];

arr.indexOf(2);
arr.lastIndexOf(2);

arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
