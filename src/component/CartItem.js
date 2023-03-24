import { RiDeleteBin6Fill } from 'react-icons/ri';

import { removeAll, removeCart } from '../api/api';

const CartItem = (props) => {
  let cartlist = JSON.parse(localStorage.getItem('cartlist'));
  const handlerDelete = () => {
    removeAll() // 로컬스토리지 데이터 전체삭제
    props.handlerChkCart(props.cartlist) // 로컬스토리지 데이터 존재 여부 체크
    alert('장바구니에 상품이 없습니다.')
  }
  return(
    <>
      <div>
        <button type="button" onClick={handlerDelete}><RiDeleteBin6Fill />전체삭제</button>
      </div>
      <ul>
        {
          cartlist?.map(item => {
            console.log(item)
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
                      <dd>
                          <button type="button" onClick={removeCart}><RiDeleteBin6Fill />삭제</button>
                      </dd>
                    </dl>
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
