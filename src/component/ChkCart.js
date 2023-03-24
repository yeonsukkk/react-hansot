import { useState } from "react"
import CartItem from "./CartItem"

const ChkCart = (props) => {
  const [chkCart, setChkCart] = useState(props.cartlist) // 로컬스토리지 데이터 존재 여부 체크
  return(
    <>
      {
        chkCart === undefined ? 
        <p>상품을 담아주세요.</p>
        :
        <CartItem chkCart={chkCart} handlerChkCart={setChkCart} />
      }
    </>
  )
}

export default ChkCart