import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';

import shortcut1 from '../assets/images/shortcut1.jpg'
import shortcut2 from '../assets/images/shortcut2.jpg'

import './Shortcut.css'

const Shortcut = () => {
    return(
        <section className="shortcutWrap">
            <h3 className="hide">바로가기</h3>
            <div>
                <div className="link">
                    <Link to="/menu">
                        <dl>
                            <dt>한솥 메뉴 보러가기<AiOutlineArrowRight /></dt>
                            <dd>가격 이상의 가치가 담긴<br />다양한 메뉴를 확인해보세요</dd>
                        </dl>
                    </Link>
                </div>
                <div className="deco">
                    <img src={shortcut1} alt="메뉴바로가기 이미지" />
                </div>
            </div>
            <div>
                <div className="deco">
                    <img src={shortcut2} alt="가맹점바로가기 이미지" />
                </div>
                <div className="link">
                    <Link to="/hansotStore">
                        <dl>
                            <dt>주변 점포 찾기<AiOutlineArrowRight /></dt>
                            <dd>갓 지은 한끼가 기다리고 있는<br />가까운 한솥 매장을 찾아보세요</dd>
                        </dl>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Shortcut;