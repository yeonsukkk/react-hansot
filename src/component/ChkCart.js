import { useState } from "react"
import CartItem from "./CartItem"

import './CartItem.css'

const ChkCart = (props) => {
  
  // 로컬스토리지에서 데이터 가져오기
  const [cartlist, setCartlist] = useState(JSON.parse(localStorage.getItem('cartlist')))
  console.log(cartlist)
  return(
    <>
      {
        cartlist === null ? 
        <p className="noItem">장바구니가 비었습니다.<br />상품을 담아주세요.</p>
        :
        <CartItem
          cartlist={cartlist}
          deleteCartlist={setCartlist}
        />
      }
    </>
  )
}

export default ChkCart