import { ChangeEvent } from 'react'


//// 컨테이너 타입
//new 와 edit page 에서 내려주고 있음
export interface IBoardWriteProps {
  isEdit: boolean
  data?: any // data: any 만 하면 new>index 에서 에러
}

export interface IMyVariables {
  number: number
  writer?: string
  title?: string
  contents?: string
}


// 프리젠터 타입
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void // 함수의 리턴값 string, number, void(리턴하지 않음)
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void
  callGraphqlApi: () => void
  onClickUpdate: () => void
  isActive: boolean
  isEdit: boolean
  data?: any
}

// 스타일 타입
export interface ISubmitButtonProps {
  isActive: boolean
}