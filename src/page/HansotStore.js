import axios from 'axios'
import { useEffect, useState } from 'react'
import Event from '../component/Event'
import HansotStoreOpt from '../component/HansotStoreOpt'
import HansotStoreCnt from '../component/HansotStoreCnt'

const HansotStore = () => {
    const [store, setStore] = useState([]) // data담기
    useEffect(() => { // data가져오기
        const fetchData = async() => {
            const response = await axios.get('../json/store.json')
            setStore(response)
        }
        fetchData()
    }, [])

    const [opt, setOpt] = useState('전체') // select
    const [map, setMap] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.6359537339267!2d126.93770110000001!3d37.4693165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9fe8a0a1e2a5%3A0xccc97446c4ec08bd!2z7ZWc7Ial64-E7Iuc6529IOyLoOumvOqzoOyLnOy0jOygkA!5e0!3m2!1sko!2skr!4v1679641975919!5m2!1sko!2skr')
    

    //필터
    let filterItem = store.data?.filter(item => {return opt !== '전체' ? item.title === opt : store.data})
    
    return(
        <>
        <section className="hansotStoreWrap subWrap">
            <div className="comWebWidth">
                <h3 className="mainTitle">가맹점찾기</h3>
                <div className="cntWrap">
                    {<HansotStoreOpt data={store.data} getOpt={(getOpt) => setOpt(getOpt)} />}
                    {<HansotStoreCnt data={filterItem} opt={opt} map={map} setMap={setMap} />}
                </div>
                <Event />
            </div>
        </section>
        </>
    )
}

export default HansotStore;