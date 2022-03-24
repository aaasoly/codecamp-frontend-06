import { stringifyForDisplay } from "@apollo/client/utilities"

export default function TypescriptPage() {
  // 타입 추론
  let aaa = "안녕하세요"
  aaa = 3

  // 타입 명시
  let bbb: string = "반갑습니다"

  // 문자 타입
  let ccc: string
  ccc = "반가워요!!!"
  ccc = 3

  // 숫자 타입
  let ddd: number = 10
  ddd = 3
  ddd = "안녕하세요"

  // 불린 타입
  let eee: boolean = true
  eee = false
  eee = "false" // 문자열에 값이 있어서 true 로 작동하는 걸 타입스크립트에서 막아줄 수 있음

  // 배열 타입
  let fff: number[] = [1, 2, 3, 4, 5, "안녕"]
  let ggg: string[] = ["철수", "영희", "훈이", 13]
  let hhh: (number | string)[] = ["철수", "영희", "훈이", 13]
                // | 또는, & 그리고 - 자바스크립트와 달리 하나만!

  // 객체 타입
  interface IProfile {
    name: string
    age: string | number
    school: string
    hobby?: string // 있어도 좋고 없어도 좋을 때 ? 사용 . ? 없으면 반드시 필수로 사용해야함!
  }
  let profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교"
  }
  profile.age = "8살"

  // 함수 타입                                              //return 값 타입
  const add = (money1: number, money2: number, unit: string): string => {
    return money1 + money2 + unit
  }
  const result = add(1000, 2000, "원")
  
  return <div>타입스크립트 연습하기</div>
}