import { useState } from "react"
import CartItem from "./CartItem"

import './CartItem.css'

const ChkCart = (props) => {
  const [chkCart, setChkCart] = useState(props.cartlist) // 로컬스토리지 데이터 존재 여부 체크
  return(
    <>
      {
        chkCart === undefined ? 
        <p className="noItem">장바구니가 비었습니다.<br />상품을 담아주세요.</p>
        :
        <CartItem chkCart={chkCart} handlerChkCart={setChkCart} />
      }
    </>
  )
}

export default ChkCart