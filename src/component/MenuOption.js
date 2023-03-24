import './MenuOption.css'

const MenuOption = (props) => {

    let opt1s = document.querySelectorAll('.opt1 input')
    let chkOpt1;

    // 원하는 항목 체크박스 체크여부 확인 후 props
    opt1s.forEach((elm, idx) => {
        chkOpt1 = (e) => {
            if(e.target.checked){
                props.getOption(e.target.value)
            }else {
                props.removeOption(e.target.value)
            }
        }
    })


    
    return(
        <>
            <aside className="menuOptionWrap">
                <h4 className="hide">옵션선택 영역</h4>
                <div className="opt opt1">
                    <h5>원하시는 항목을 선택하세요</h5>
                    <ul>
                        <li>
                            <span>고기류</span>
                            <ul>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={chkOpt1}
                                            value="소고기"
                                        />
                                        <span>소고기</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={chkOpt1}
                                            value="돼지고기"
                                        />
                                        <span>돼지고기</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={chkOpt1}
                                            value="닭고기"
                                        />
                                        <span>닭고기</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>생선류</span>
                            <ul>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={chkOpt1}
                                            value="연어"
                                        />
                                        <span>연어</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={chkOpt1}
                                            value="고등어"
                                        />
                                        <span>고등어</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={chkOpt1}
                                            value="새우"
                                        />
                                        <span>새우</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span>튀김류</span>
                            <ul>
                                <li>
                                    <label>
                                        <input
                                            type="checkbox"
                                            onChange={chkOpt1}
                                            value="감자"
                                        />
                                        <span>감자</span>
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default MenuOption;