/* global kakao */
import React, { useEffect } from "react";
import Container from "../../components/Container";

export default function Map() {
  const { kakao } = window as any;

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
    };

    const map = new kakao.maps.Map(container, options);

    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return (
    <Container>
      <h2>지도 목록 조회</h2>
      <section className="flex justify-center	">
        <div id="map" className="w-[500px] h-[400px] mr-[20px]"></div>
        <div className="">
          <h3>물건목록</h3>
          <ul>
            <li>
              <h4>2021-11222-001</h4>
              <p>서울시 송파구 가락동...</p>
              <p>최저가 9000만원</p>
            </li>
            <li>물건2</li>
            <li>물건3</li>
          </ul>
        </div>
      </section>
    </Container>
  );
}
