export default function BoardComponent(props){

  return (
    <div>  {/* boolean이기 때문에 === true 써줄 필요 없음!! */}
      <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
      제목: <input type="text" /> <br/>
      내용: <input type="text" /> <br/>
      <button>{props.isEdit ? "수정" : "등록"}하기</button>
    </div>
  )

}