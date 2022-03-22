import styled from "@emotion/styled";

export const WriterInput = styled.input`
  padding: 5px 5px;
`

export const TitleInput = styled.input`
  padding: 5px 5px;
`

export const ContentsInput = styled.input`
  padding: 5px 5px;
`

export const SubmitButton = styled.button`
  background-color: ${props => props.isActive ? "violet" : "gray"};
  padding: 5px 5px;
`