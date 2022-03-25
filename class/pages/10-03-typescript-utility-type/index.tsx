export default function TypescriptPage() {
  
  interface IProfile {
    name: string
    age: number
    school: string
    hobby?: string
  }

  // 기존의 것과 대조해서 쓰기 위해 유틸리티 사용

  // 1. Pick 타입 : 특정 대상에서 원하는 것만 골라 옴
  type Mytype1 = Pick<IProfile, "name" | "age">


  // 2. Omit 타입 : 명시한 요소만 빼고 골라옴
  type Mytype2 = Omit<IProfile, "school">


  // 3. Partial 타입 : 전체에 ? 를 붙임
  type Mytype3 = Partial<IProfile>


  // 4. Required 타입 : 필수 요소로 바꿔줌. ? 가 있다면 삭제됨
  type Mytype4 = Required<IProfile>


  // 5. Record 타입 : 새롭게 타입을 지정. 정해둔 타입만 사용 가능
  type ZZZ = "aaa" | "qqq" | "rrr" // Union 타입
  // let apple = ZZZ
  // apple = "aaa"
  type Mytype5 = Record<ZZZ, IProfile>



  // ======== 추가 (선언병합) - type vs interface ========= 
  // 인터페이스는 같은 이름으로 또 만들 수 있다
  interface IProfile {
    candy: number
  }

  let profile: IProfile
  profile = {
    candy: 3,
    age: 10,
    hobby: 영화보기
  }



  return <div>타입스크립트 연습하기</div>
}