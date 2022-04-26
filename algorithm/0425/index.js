//크레인 인형뽑기
function solution(board, moves) {
  let answer = 0;
  const bucket = []; // 인형을 담아줄 바구니

  // 1. 크레인이 이동하는 위치값을 구하는 반복문
  for (let i = 0; i < moves.length; i++) {
    //2. 크레인이 이동해서 뽑아올 수 있는 인형의 위치값을 구하는 반복문
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1];

      // console.log(board[l][moves[i]-1], moves[i])
      // 크레인의 위치에 따른 인형, 크레인의 위치

      // 인형이 있는 칸이 빈 칸이 아니라면
      if (doll !== 0) {
        // 방금 뽑은 인형의 위치를 빈칸으로 만들어준다
        board[l][moves[i] - 1] = 0;

        console.log(doll, bucket);

        // 바구니에 넣으려고 하는 인형이 바구니의 마지막 데이터(맨 위에 있는 인형)와 동일한지
        if (doll === bucket[bucket.length - 1]) {
          answer += 2; // 터트린 인형 개수
          bucket.pop(); // 맨 마지막 인형 제거
          break; // 밑의 인형을 넣은 로직 작동 막음, 즉 인형 제거 후 함수 종료
        }

        bucket.push(doll);
        break; // 인형을 뽑았으면 멈춤
      }
    }
  }
  return answer;
}

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  moves.forEach((move) => {
    // 메서드는 주어진 배열의 끝까지 실행하기 때문에 break를 쓸 수 없다
    // 실행 범위를 조절할 땐 스위치 변수를 꼭 사용해야 함
    // 반복문이 실행되지 않도록 하는 스위치 변수
    // stop 이 false 일 때만 반복문 실행
    let stop = false;

    board.forEach((location) => {
      const doll = location[move - 1]; // 인형의 현재 위치

      if (stop === false) {
        if (doll !== 0) {
          location[move - 1] = 0;
          if (doll === bucket[bucket.length - 1]) {
            answer += 2;
            bucket.splice(bucket.length - 1, 1);
            //bucket.pop()
          } else {
            bucket.push(doll);
          }
          stop = true;
        }
      }
    });
  });

  return answer;
}
