import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsFillXSquareFill } from 'react-icons/bs';


import { removeAll, removeCart } from '../api/api';
import './CartItem.css'

const CartItem = (props) => {
  const handlerDeleteAll = () => { // 전체삭제 버튼
    removeAll() // 로컬스토리지 데이터 전체삭제 여부 체크
    props.deleteCartlist(JSON.parse(localStorage.getItem('cartlist')))
  }

  const handlerDelete = (id) => { // 특정제품 삭제버튼
    removeCart(id)
    props.deleteCartlist(JSON.parse(localStorage.getItem('cartlist')))
  }
  return(
    <>
      <div className="removeAll">
        <button type="button" onClick={handlerDeleteAll}><RiDeleteBin6Fill />전체삭제</button>
      </div>
      <ul className="cartlistItem">
        {
          props.cartlist?.map(item => {
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
                      <button type="button" className="removeItem" onClick={() => handlerDelete(item.id)}><BsFillXSquareFill /></button>
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
