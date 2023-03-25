import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsFillXSquareFill } from 'react-icons/bs';


import { removeAll, removeCart } from '../api/api';
import './CartItem.css'

const CartItem = (props) => {
  let cartlist = JSON.parse(localStorage.getItem('cartlist'));
  const handlerDelete = () => {
    removeAll() // 로컬스토리지 데이터 전체삭제
    props.handlerChkCart(props.cartlist) // 로컬스토리지 데이터 존재 여부 체크
    alert('장바구니에 상품이 없습니다.')
  }
  return(
    <>
      <div className="removeAll">
        <button type="button" onClick={handlerDelete}><RiDeleteBin6Fill />전체삭제</button>
      </div>
      <ul className="cartlistItem">
        {
          cartlist?.map(item => {
            return(
              <li key={item.id}>
                <figure>
                  <div>
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <figcaption>
                    <dl>
                      <dt>{item.title}</dt>
                      <dd>{item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</dd>
                    </dl>
                    <p>
                      <button type="button" className="removeItem" onClick={() => removeCart(item.id)}><BsFillXSquareFill /></button>
                    </p>
                  </figcaption>
                </figure>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default CartItem
