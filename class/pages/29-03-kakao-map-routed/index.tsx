import Head from "next/head";
import { useEffect } from "react";
// import Script from "next/script";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=1914a440888b0940d807c8d489453ba2&autoload=false";
    // 쿼리스트링: 객체를 보내고 싶을 때 사용한다. ?key=value&key=value
    document.head.appendChild(script); // head 태그에 자식으로 script 추가

    // script 가 로드가 되면 실행
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // map 으로 담아도 되고 안 담아도 됨
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1914a440888b0940d807c8d489453ba2"
        ></script>
      </Head> */}

      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}
