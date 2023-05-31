import { useEffect } from 'react';
import './HansotStoreCnt.css';

import { FaMapMarkedAlt } from 'react-icons/fa';
import { useState } from 'react';
import iconMap from '../assets/images/icon_map.png';
const { kakao } = window;

const HansotStoreCntKakao = (props) => {
  const [mapKakao, setKakaoMap] = useState(null); // map 활성화 된 중심좌표
  const [marker, setMarker] = useState(null); // map marker 표시
  let data = []; // 옵션에 따른 데이터 담기
  let allData = []; // 옵션이 전체일 경우 모든 데이터 담기
  if (props.opt === '전체') {
    data = props.data?.map((item) => {
      return item.list.forEach((marge) => allData.push(marge)); // 시, 군, 도 별로 나눠져있는 데이터 합침
    });
    data = allData;
  } else {
    data = props.data[0].list;
  }

  useEffect(() => {
    // 활성화 된 맵 좌표 바꾸기
    const container = document.getElementById('kakaoMap'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(props.map[0], props.map[1]), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    const kakaoMap = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    setKakaoMap(kakaoMap);

    const markerPosition = new kakao.maps.LatLng(props.map[0], props.map[1]); // 마커표시 위치
    // 이미지 마커 & 커스텀 오버레이 관련 변수
    const imgSrc = iconMap;
    const imgSize = new kakao.maps.Size(64, 69); // 이미지 마커 크기
    const imgOpt = { offset: new kakao.maps.Point(27, 69) }; // 마커의 좌표와 일치시킬 이미지 안에서의 좌표 설정
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOpt);
    const kakaoMarker = new kakao.maps.Marker({
      position: markerPosition, // 마커 생성
      image: markerImg, // 마커 이미지 설정
    });
    setMarker(kakaoMarker.setMap(kakaoMap)); // 마커 표시

    // 커스텀 오버레이에 표출될 내용
    const content =
      `<div class="kakaoCustomoverlay">` +
      `  <a href="https://map.kakao.com/link/map/한솥도시락 ${props.mapTxt},${props.map[0]},${props.map[1]}" target="_blank">` +
      `    <span class="title">한솥도시락 ${props.mapTxt}</span>` +
      `  </a>` +
      `</div>`;
    const contentWrap = document.createElement('div');
    contentWrap.innerHTML = content;
    const customOverlay = new kakao.maps.CustomOverlay({
      map: kakaoMap,
      position: markerPosition,
      content: contentWrap,
      yAnchor: 1,
    });
    customOverlay.setMap(kakaoMap);
  }, [props.map]);

  return (
    <div className='HansotStoreWrap'>
      <div className='map'>
        <div id='kakaoMap'></div>
      </div>
      <ul className='storeList'>
        {data?.map((item) => (
          <li key={item.title}>
            <dl>
              <dt>{item.title}</dt>
              <dd>{item.tel}</dd>
              <dd>{item.address}</dd>
              <dd>
                <button
                  type='button'
                  onClick={() => {
                    return {
                      mapKakao: props.setMap(item.mapKakao),
                      mapTxt: props.setMapTxt(item.title),
                    };
                  }}
                >
                  <FaMapMarkedAlt />
                  지도보기
                </button>
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HansotStoreCntKakao;
