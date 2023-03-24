import './ProductSubEx.css'

const ProductSubEx = (props) => {
    return(
        <div className="subEx">
            <article>
                <h4>열량</h4>
                <p>{props.kcal}<span>Kcal</span></p>
            </article>
            <article>
                <h4>알레르기</h4>
                <p>{props.allergy.join(', ')}</p>
            </article>
        </div>
    )
}

export default ProductSubEx;