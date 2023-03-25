/* 
[오류]
const cartlist = JSON.parse(localStorage.getItem('cartlist') || '[]') -> 상단에 코드 작성 시 오류남 (Unexpected end of JSON input Error in JavaScript)
cartlistData() 함수로 해결
참고 -> https://stackdiary.com/guides/unexpected-end-of-json-input/
*/

function cartlistData(data){ // 로컬스토리지에 데이터 담기
  try{
    const cartlist = JSON.parse(localStorage.getItem('cartlist') || '[]')
    // 장바구니 중복 체크
    let isExists = false
    if(cartlist.length > 0){
      cartlist.forEach((item) => {
        if(item.id === data.id) isExists = true
      })
    }
    if(isExists){
      alert('이미 장바구니에 담겨있습니다.')
      return false
    }

    // 로컬스토리지에 데이터 담기
    cartlist.push(data)
    localStorage.setItem('cartlist', JSON.stringify(cartlist))
    alert('장바구니에 담겼습니다.')
  } catch(error){
    alert(error.message)
  }
}

export function addCart(product){ // 로컬스토리지에 제품 담기
  cartlistData(product)

}

export function removeCart(id){ // 로컬스토리지에서 해당제품 삭제하기
  const cartlist = JSON.parse(localStorage.getItem('cartlist'))
  const result = cartlist?.filter(item => item.id !== id)
  if(result.length === 0){
    localStorage.removeItem('cartlist')
    return false
  }
  localStorage.setItem('cartlist', JSON.stringify(result))
}

export function removeAll(){ // 로컬스토리지에서 모든 제품 삭제하기
  localStorage.removeItem('cartlist')
}