function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    // answer[i] = ""
    let str = "";

    // 지도 1의 암호를 2진법으로 변환 후, n 길이만큼 앞에서부터 "0"으로 채운다
    const map1 = arr1[i].toString(2).padStart(n, "0");
    // 지도 2의 암호를 2진법으로 변환 후, n 길이만큼 앞에서부터 "0"으로 채운다
    const map2 = arr2[i].toString(2).padStart(n, "0");

    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        // 둘 중 하나라도 벽이라면, 전체 지도에서도 벽
        // answer[i] += "#"
        str += "#";
      } else {
        // 두 개 모두 공백일 경우, 전체 지도도 공백이다 (둘 다 "0"을 가진다면)
        // answer[i] += " "
        str += " ";
      }
    }
    answer.push(str);
  }
  return answer;
}

// 메서드 사용하기
function solution(n, arr1, arr2) {
  return arr1.map((map1, i) => {
    // 지도 1의 암호를 2진법으로 변환
    map1 = map1.toString(2).padStart(n, "0");
    // 지도 2의 암호를 2진법으로 변환
    const map2 = arr2[i].toString(2).padStart(n, "0");

    return map1.split("").reduce((acc, cur, i) => {
      return acc + (cur === "1" || map2[i] === "1" ? "#" : " ");
    }, "");
  });
}
