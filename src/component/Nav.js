import { Link, useLocation, NavLink } from "react-router-dom";

import './Nav.css'
import Logo from '../assets/images/h1_logo.png'

const Nav = () => {
    const location = useLocation()
    function getLinkStyle({isActive}){
        console.log(isActive)
        
    }
    
    return(
        <>
            <header className={(location.pathname === '/') ? "main" : "sub" }>
                <div className="comWebWidth">
                    <h1><Link to="/"><img src={Logo} alt="한솥도시락" /></Link></h1>
                    <nav>
                        <h2 className="hide">메인메뉴</h2>
                        <ul className="menuList">
                            <li><NavLink to="/menu"  style={getLinkStyle}>메뉴소개</NavLink></li>
                            <li><NavLink to="/myMenu">나만의메뉴</NavLink></li>
                            <li><NavLink to="/hansotStore">가맹점찾기</NavLink></li>
                            <li><NavLink to="/news">새로운소식</NavLink></li>
                            <li><NavLink to="/cart">장바구니</NavLink></li>
                        </ul>
                        <div className="util">
                            <button type="button">로그인</button> / <button type="button">회원가입</button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Nav;