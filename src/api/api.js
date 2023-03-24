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

export function addCart(product){
  cartlistData(product)

}

export function removeCart(product){
  console.log(1)
}

export function removeAll(){
  localStorage.removeItem('cartlist')
}