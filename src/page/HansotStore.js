import axios from 'axios';
import { useEffect, useState } from 'react';
import Event from '../component/Event';
import HansotStoreOpt from '../component/HansotStoreOpt';
import HansotStoreCnt from '../component/HansotStoreCnt';
import './HansotStore.css';

const HansotStore = () => {
  const [store, setStore] = useState([]); // data담기
  useEffect(() => {
    // data가져오기
    const fetchData = async () => {
      const response = await axios.get('../json/store.json');
      setStore(response);
    };
    fetchData();
  }, []);

  const [opt, setOpt] = useState('전체'); // select
  const [map, setMap] = useState(null);

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
              <HansotStoreCnt
                data={filterItem}
                opt={opt}
                map={map}
                setMap={setMap}
              />
            }
          </div>
          <Event />
        </div>
      </section>
    </>
  );
};

export default HansotStore;
