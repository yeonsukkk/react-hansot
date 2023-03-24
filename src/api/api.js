const CARTLIST_KEY = 'cartlist'
const cartlist = JSON.parse(localStorage.getItem(CARTLIST_KEY) || '{}')

export function addCart(e, productData, menuSlug){
  let cart = productData.find(product => product.slug === menuSlug)
  console.log(cartlist)
  cartlist.push(cart)
  localStorage.setItem(CARTLIST_KEY, JSON.stringify(cartlist))
}

export function remove(){
  localStorage.clear()
}