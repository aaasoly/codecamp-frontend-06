import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  getLatLngState,
  getLatState,
  getLngState,
  useditemAddressState,
} from "../../../commons/store";
import _ from "lodash";
import styled from "@emotion/styled";

const MapBox = styled.div`
  width: 384px;
  height: 252px;
`;

const Info = styled.div`
  width: 150px;
  height: 50px;
  padding: 5px;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function WriteMap() {
  const [useditemAddress, setUseditemAddress] =
    useRecoilState(useditemAddressState);

  const [getLat, setGetLat] = useRecoilState(getLatState);
  const [getLng, setGetLng] = useRecoilState(getLngState);

  // const [getLatLng, setGetLatLng] = useRecoilState(getLatLngState);

  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 생성
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=1914a440888b0940d807c8d489453ba2&autoload=false&libraries=services";
    document.head.appendChild(script);

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

        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(useditemAddress, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            //console.log(coords);

            // setGetLatLng(coords);
            setGetLat(coords.La);
            setGetLng(coords.Ma);

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            console.log(marker.position);

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="width:150px;height:60px;text-align:center;padding:6px;">${useditemAddress}</div>`,
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [useditemAddress]);

  return (
    <>
      <MapBox id="map" />
    </>
  );
}
