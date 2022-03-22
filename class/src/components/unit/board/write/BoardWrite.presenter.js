import { SubmitButton, WriterInput } from './BoardWrite.styles'

export default function BoardWriteUI(props) {

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <WriterInput type="text" onChange={props.onChangeWriter}/> <br/>
      제목: <input type="text" onChange={props.onChangeTitle}/> <br/>
      내용: <input type="text" onChange={props.onChangeContents}/> <br/>
      <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>Graphql-API 요청하기!!!</SubmitButton>



      {/* <SubmitButton onClick={props.callGraphqlApi} isActive={true}>Graphql-API 요청하기!!!</SubmitButton> */}
                                  {/* props 로 넘겨줄 값 지정, aaa="yellow" 와 같은 스타일 지정도 가능*/}
      <div></div>
    </div>
  )
}
  

// container로 export