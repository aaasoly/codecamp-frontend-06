import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      width={500}
      height={500}
    />
  );
  // ReactPlayer은 자체적으로 width,height 를 갖기 때문에 태그 안에서 정의해줄 것
  // 이모션 사용할 필요 없음
}
