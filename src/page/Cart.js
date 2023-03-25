import ChkCart from '../component/ChkCart';
import Event from '../component/Event'

const Cart = () => {
    const cartlist = JSON.parse(localStorage.getItem('cartlist'))

    return(
        <>
            <section className="cartWrap subWrap">
                <div className="comWebWidth">
                    <h3 className="mainTitle">장바구니</h3>
                    <div className="cntWrap">
                        <ChkCart cartlist={cartlist} />
                    </div>
                    <Event />
                </div>
            </section>
        </>
    )
}

export default Cart;