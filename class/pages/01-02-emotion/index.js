import {  MyBody, MyTitle, MyId, MyPw } from '../../styles/emotion'


export default function AAAPage() {


  // 여기는 자바스크립트 쓰는 곳

  return (
    <MyBody>
    <MyTitle>로그인</MyTitle>
      아이디<MyId type="text" />
      비밀번호<MyPw type="text" />
    
    </MyBody>
  )
}
