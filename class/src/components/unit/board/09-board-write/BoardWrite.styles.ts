import styled from "@emotion/styled"
import { ISubmitButtonProps } from "./BoardWrite.types"



export const SubmitButton = styled.button`
  background-color: ${(props: ISubmitButtonProps) => props.isActive ? "yellow" : "gray"};
`                   // isActive 가 true면 yellow, false면 gray       
                    // 부모 컴포넌트의 aaa="yellow" 받아오기
                    // 화살표 함수로 만들어서 가져와야함. props는 항상 함수 인자로 넣을것!!

export const WriterInput = styled.input`
  border-color: green;
`