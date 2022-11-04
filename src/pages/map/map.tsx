/* global kakao */
import React, { useEffect } from 'react';

export default function Map() {
  const { kakao } = window as any;

  useEffect(() => {
    const container = document.getElementById('map');
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

  return <div id="map" className="w-[500px] h-[400px]"></div>;
}
