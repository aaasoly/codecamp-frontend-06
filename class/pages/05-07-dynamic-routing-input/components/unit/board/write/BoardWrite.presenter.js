import *  as my from './BoardWrite.styles'

export default function BoardWriteUI(props) {

  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <my.WriterInput type="text" onChange={props.onChangeWriter}/> <br/>
      제목: <my.TitleInput type="text" onChange={props.onChangeTitle}/> <br/>
      내용: <my.ContentsInput type="text" onChange={props.onChangeContents}/> <br/>
      <my.SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>Graphql-API 요청하기!!!</my.SubmitButton>
      <div></div>
    </div>
  )
}