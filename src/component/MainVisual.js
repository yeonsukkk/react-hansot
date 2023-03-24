import { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// swiper
import './MainVisual.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
SwiperCore.use([Autoplay,Pagination, Navigation]);



const MainVisual = () => {

    const [mainVisual, setMainVisual] = useState([]);

    const fetchData = useCallback(() => {
        fetch('./json/mainVisual.json')
        .then(response => response.json())
        .then(data => setMainVisual(data))
    })
    useEffect(fetchData, [])


    // swiper navigation
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return(
        <section className="mainVisual">
            <h3 className="hide">메인슬라이드</h3>
            <Swiper
                modules={[Pagination]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{ 
                    clickable: true
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current
                }}
            >
                {
                    mainVisual?.map(item => {
                        return(
                            <SwiperSlide key={item.id}>
                                <img src={item.imgUrl} alt={item.ex} />
                            </SwiperSlide>
                        )
                    })
                }
                {/* button */}
                <button type="button" className="btnPrev" ref={navigationPrevRef}><IoIosArrowBack>prev</IoIosArrowBack></button>
                <button type="button" className="btnNext" ref={navigationNextRef}><IoIosArrowForward>next</IoIosArrowForward></button>
            </Swiper>
        </section>
    )
}

export default MainVisual;