import event1 from '../assets/images/event/6a87aa7c28c34feea808258782f65ac820230224045355.jpg'
import event2 from '../assets/images/event/863edcd48a81471788be2c496bda677020230224045753.jpg'
import event3 from '../assets/images/event/27647da57f054b01a7cf1461d1f6a48820230224045249.jpg'

import './Event.css'

const Event = () => {
    return(
        <section className="eventWrap">
            <h3>EVENT</h3>
            <div className="eventItemWrap">
                <figure>
                    <div>
                        <img src={event1} alt="이벤트1" />
                    </div>
                    <figcaption>&#91;3월 수량한정 신메뉴&#93; 새후마요</figcaption>
                </figure>
                <figure>
                    <div>
                        <img src={event2} alt="이벤트2" />
                    </div>
                    <figcaption>&#91;3월 한정&#93; 배달의민족 첫 구매 프로모션</figcaption>
                </figure>
                <figure>
                    <div>
                        <img src={event3} alt="이벤트3" />
                    </div>
                    <figcaption>&#91;3월 스낵 신메뉴&#93; 해시 포테이토 스틱 시즈닝 2종&#40;치즈버터, 허니버터&#41;</figcaption>
                </figure>
            </div>
        </section>
    )
}


export default Event;