import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';



import './Footer.css'

const Footer = () => {
    return(
        <>
            <footer>
                <div className="comWebWidth">
                    <ul className="sitemap">
                        <li><Link to="/">고객센터</Link></li>
                        <li><Link to="/">이용약관</Link></li>
                        <li><Link to="/">개인정보처리방침</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                    </ul>
                    <div className="info">
                        <div>
                            <address>서울시 강남구 강남대로 318&#40;역삼동&#41; 타워837빌딩 8,9층</address>
                        </div>
                        <div>
                            <dl>
                                <dt>대표이사</dt>
                                <dd>김김김</dd>
                            </dl>
                            <dl>
                                <dt>T.</dt>
                                <dd>02.0000.0000</dd>
                            </dl>
                            <dl>
                                <dt>E-MAIL.</dt>
                                <dd>webmaster@hsd.co.kr</dd>
                            </dl>
                        </div>
                        <div>
                            <dl>
                                <dt>사업자등록번호</dt>
                                <dd>214-81-96569</dd>
                            </dl>
                            <dl>
                                <dt>전국창업설명회</dt>
                                <dd>02-585-1114</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="infoBtm">
                        <p>
                            <small>COPYRIGHT&copy;&#12828;한솥. ALL RIGHTS RESERVED.</small>
                        </p>
                        <ul className="sns">
                            <li><Link to="/"><FaInstagramSquare /></Link></li>
                            <li><Link to="/"><FaFacebookSquare /></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;