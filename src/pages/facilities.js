import React, { useEffect, useState } from 'react';
import './facilities.css';

const Facilities = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const loadKakaoMapScript = () => {
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`;
      script.onload = () => {
        window.kakao.maps.load(initMap);
      };
      document.head.appendChild(script);
    };

    loadKakaoMapScript();
  }, []);

  const initMap = () => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.6324199, 127.0780348),
      level: 4,
    };

    const kakaoMap = new window.kakao.maps.Map(mapContainer, mapOption);
    setMap(kakaoMap);
  };

  const showMarker = (type) => {
    removeAllMarkers();

    if (type === 'printer') {
      addMarker(new window.kakao.maps.LatLng(37.6307527, 127.0792685), '<div>제2학생회관</div>');
      addMarker(new window.kakao.maps.LatLng(37.6323953, 127.0794556), '<div>창학관</div>');
      addMarker(new window.kakao.maps.LatLng(37.6309703, 127.0804416), '<div>상상관</div>');
      addMarker(new window.kakao.maps.LatLng(37.6353013, 127.0766661), '<div>어의관</div>');
      addMarker(new window.kakao.maps.LatLng(37.633334, 127.0807632), '<div>청운관</div>');
    } else if (type === 'cafe') {
      addMarker(new window.kakao.maps.LatLng(37.6345237, 127.0772813), '<div>제1학생회관 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.63230811861389, 127.07970768213272), '<div>도서관 2층</div>');
      addMarker(new window.kakao.maps.LatLng(37.630775728683744, 127.07924675801344), '<div>무궁관 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6307527, 127.0792685), '<div>제2학생회관 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6300388, 127.0799105), '<div>테크노큐브동 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6314439, 127.0759928), '<div>프론티어관 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6346234, 127.0769983), '<div>누리학사 B1층</div>');
    } else if (type === 'convenience-store') {
      addMarker(new window.kakao.maps.LatLng(37.6345237, 127.0772813), '<div>제1학생회관 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6307527, 127.0792685), '<div>제2학생회관 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6316684, 127.0774813), '<div>테크노파크 1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6316684, 127.0774813), '<div>생활관 B1층</div>');
      addMarker(new window.kakao.maps.LatLng(37.6361952, 127.0783432), '<div>수림학사 B1층</div>');
    }
  };

  const addMarker = (position, title) => {
    const marker = new window.kakao.maps.Marker({
      map: map,
      position: position,
    });

    const infowindow = new window.kakao.maps.InfoWindow({
      content: title,
    });

    window.kakao.maps.event.addListener(marker, 'mouseover', () => {
      infowindow.open(map, marker);
    });

    window.kakao.maps.event.addListener(marker, 'mouseout', () => {
      infowindow.close();
    });

    setMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  const removeAllMarkers = () => {
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    setMarkers([]);
  };

  return (
    <div>
      <main>
        <div className="fac-section">
          <div id="map"></div>

          <div className="button-section">
            <button className="fac-button" onClick={() => showMarker('printer')}>프린터</button>
            <button className="fac-button" onClick={() => showMarker('convenience-store')}>편의점</button>
            <button className="fac-button" onClick={() => showMarker('cafe')}>카페</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Facilities;