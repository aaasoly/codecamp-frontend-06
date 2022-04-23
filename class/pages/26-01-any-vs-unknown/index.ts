// 1. any타입(그냥 자바스크립트랑 같음)
const getAny = (args: any) => {
  return args + 2;
};

const result = getAny("철수");

// 2. unknown 타입 (개발자에게 안전하게 코딩하도록 유도)
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요";
  }
};

const result2 = getUnknown("철수");

// unknow 은 현재는 모름. 상황에 따라서 작성해야한다.