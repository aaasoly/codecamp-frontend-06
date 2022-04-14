// 포켓몬

// for문
function solution(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    if (answer.length < nums.length / 2 && answer.includes(nums[i]) === false) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

// new Set 중복 문자 자동으로 제거
function solution(nums) {
  const answer = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (answer.size < nums.length / 2) {
      // .length 대신에 .size
      answer.add(nums[i]); // .push 대신 .add
    }
  }
  return answer.size;
}

// forEach
function solution(nums) {
  const answer = new Set([]);

  nums.forEach((monster) => {
    if (answer.size < nums.length / 2) {
      answer.add(monster);
    }
  });
  return answer.size;
}

// new Set 리팩토링
function solution(nums) {
  // 내가 최대한 가져갈 수 있는 포켓몬 종류의 수
  const answer = new Set(nums).size;
  // 내가 최대한 가져갈 수 있는 포켓몬의 수
  const limit = nums.length / 2;

  if (limit >= answer) {
    return answer;
  }
  return limit;
}
