import axios from 'axios';
import { useEffect, useState } from 'react';
import Event from '../component/Event';
import HansotStoreOpt from '../component/HansotStoreOpt';
import HansotStoreCntKakao from '../component/HansotStoreCntKakao';

const HansotStoreKakao = () => {
  const [store, setStore] = useState([]); // data담기
  const [opt, setOpt] = useState('전체'); // select
  const [map, setMap] = useState([]); // map 활성화된 위도, 경도 좌표값
  const [mapTxt, setMapTxt] = useState(null); // map 지점명 표시
  useEffect(() => {
    // data가져오기
    const fetchData = async () => {
      const response = await axios.get('../json/store.json');
      setStore(response);
      if (response.status === 200) {
        setMap(response.data[0].list[0].mapKakao);
        setMapTxt(response.data[0].list[0].title);
      }
    };
    fetchData();
  }, []);

  //필터
  let filterItem = store.data?.filter((item) => {
    return opt !== '전체' ? item.title === opt : store.data;
  });

  return (
    <>
      <section className='hansotStoreWrap subWrap'>
        <div className='comWebWidth'>
          <h3 className='mainTitle'>가맹점찾기</h3>
          <div className='cntWrap'>
            {
              <HansotStoreOpt
                data={store.data}
                getOpt={(getOpt) => setOpt(getOpt)}
              />
            }
            {
              <HansotStoreCntKakao
                data={filterItem}
                opt={opt}
                map={map}
                setMap={setMap}
                mapTxt={mapTxt}
                setMapTxt={setMapTxt}
              />
            }
          </div>
          <Event />
        </div>
      </section>
    </>
  );
};

export default HansotStoreKakao;
