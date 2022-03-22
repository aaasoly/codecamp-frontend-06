import { useRouter } from 'next/router'

export default function StaticRoutingPage(){
  const router = useRouter()

  const onClickMove1 = () => {
    router.push("/05-04-static-routed-board/83011") // http://localhost:3000 이 생략되어 있음
  }
  const onClickMove2 = () => {
    router.push("/05-04-static-routed-board/83012") // http://localhost:3000 이 생략되어 있음
  }
  const onClickMove3 = () => {
    router.push("/05-04-static-routed-board/83013") // http://localhost:3000 이 생략되어 있음
  }

  return (
    <div>
      <button onClick={onClickMove1}>83011번 게시글로 이동하기!!!</button>
      <button onClick={onClickMove2}>83012번 게시글로 이동하기!!!</button>
      <button onClick={onClickMove3}>83013번 게시글로 이동하기!!!</button>
    </div>
  )

}