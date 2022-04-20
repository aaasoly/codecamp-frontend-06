import { useState } from "react";

// 1. 문자 타입
const getString = (arg: string): string => {
  return arg;
};
const result1 = getString("철수");

// 2. 숫자 타입
const getNumber = (arg: number): number => {
  return arg;
};
const result2 = getNumber(8);

// 3. any 타입
const getAny2 = (args: any): any => {
  return args + 2;
};

const result3_1 = getAny2("철수");
const result3_2 = getAny2(8);
const result3_3 = getAny2(true);

// 4. any 타입
const getAnys = (arg1: any, arg1: any, arg1: any): [any, any, any] => {
  return [arg3, arg2, arg1];
};

const result4 = getAnys("철수", "다람쥐초등학교", 8);

// 5. generic 타입(들어온 타입을 그대로 사용)
// 뭔진 모르겠으나 들어온 타입을 그대로 사용
function getGeneric<MyType>(arg: MyType): MyType {
  // MyType : 같은 내용으로 사용하겠다
  return arg;
}
const aaa: string = "철수";
const bbb: number = 8;
const ccc: boolean = true;

const result5_1 = getGeneric(aaa);
const result5_2 = getGeneric(bbb);
const result5_3 = getGeneric(ccc);

// 6. generic 타입2
// prettier-ignore
// 작성 시 프리터를 무시할 수 있다.
function getGenerics<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}
const result6 = getGenerics("철수", "다람쥐초등학교", 8);

// any 와 공통점 : 뭐가 들어올지 모름
// 차이점 : any는 리턴앖이 뭐가 나올지 모르지만 generic은 들어온 값을 따라 타입이 달라지기 때문에 return 타입도을 예측할 수 있다

// 7. generic - 축약1
// prettier-ignore
function getGenericsT<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}
const result7 = getGenericsT("철수", "다람쥐초등학교", 8);

// 8. generic - 축약2
// prettier-ignore
function getGenericsTUV<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
// generic type 명시하기
// prettier-ignore
const result8 = getGenericsTUV<string, string, number>("철수", "다람쥐초등학교", 8);

// 9. useState 에서의 generic
// const [school, setSchool] = useState<string>("다람쥐초등학교")
// const apple: number = 3;
// console.log(apple);

// 10. 화살표 함수에서의 generic
// 타입 쓰는 순서 : <뒤에 두개를 묶어줄 공통 부분>(매개변수 타입)[리턴값 타입]
// const getGenericsTUV = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
//   return [arg3, arg2, arg1];
// };
