import { FaCrown } from 'react-icons/fa';
import { IoFastFoodSharp } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import { GoLaw } from 'react-icons/go';
import { RiUserSettingsFill } from 'react-icons/ri';


import './HansotPromise.css'

const HansotPromise = () => {
    return(
        <section className="promise comWebWidth">
            <h3 className="hide">한솥의 약속</h3>
            <ul>
                <li>한솥의 약속</li>
                <li>
                    <dl>
                        <dt>
                            <i><FaCrown /></i>
                            <span><b>고객 이익</b>을<br />최우선으로 합니다</span>
                        </dt>
                        <dd>한솥은 우리 이익보다 고객 이익을 최우선으로 합니다.<br />고객이 지불하시는 것보다 월등히 높은 가치와 만족을 드립니다.</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <i><IoFastFoodSharp /></i>
                            <span>엄선된 <b>좋은<br />식재료</b>만 사용합니다</span>
                        </dt>
                        <dd>가족과 같은 마음으로 좋은 식재료를 엄선하여 안전하고<br />건강에 좋고 맛있는 음식을 정성껏 만들어 제공합니다.</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <i><IoIosPeople /></i>
                            <span>우리는 <b>더불어</b> 잘사는<br />사회를 만듭니다</span>
                        </dt>
                        <dd>가맹점, 협력업체와 함께 공존공영하며, 지역사회와 함께<br />상생하고 나눔이 있는 사회 만들기에 앞장섭니다.</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <i><GoLaw /></i>
                            <span><b>건전하고 투명한</b><br />기업을 추구합니다</span>
                        </dt>
                        <dd>법과 윤리도덕을 준수하고 근검절약과 투명경영을 통해<br />영속적으로 발전 성장할 수 있는 기업을 만듭니다.</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>
                            <i><RiUserSettingsFill /></i>
                            <span>인류 <b>사회 발전</b>에<br />기여합니다</span>
                        </dt>
                        <dd>후대를 위해 자원 절약과 환경 보호에 앞장서고 건강한<br />식생활로 인류 사회 발전에 기여합니다.</dd>
                    </dl>
                </li>
            </ul>
        </section>
    )
}

export default HansotPromise;