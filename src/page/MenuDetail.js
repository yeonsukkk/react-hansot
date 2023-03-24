import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsFillCartPlusFill } from 'react-icons/bs';

import ProductSubEx from '../component/ProductSubEx'
import Event from '../component/Event'
import { fetchAllProduct } from '../store'
import { addCart, removeAll } from '../api/api'

import './MenuDetail.css'

const MenuDetail = () => {
    let {productData} = useSelector(state => state)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProduct('./json/product.json'))
    }, [dispatch])

    const {menuSlug} = useParams()
    const matchProduct = (menuSlug) => {
        return productData.data.find(product => product.slug === menuSlug)
    }
    let product = matchProduct(menuSlug)

    const navigate = useNavigate()
    const prevPage = () => navigate(-1) 

    return(
        <section className="menuDetailWrap subWrap">
            <div className="comWebWidth">
                <h3 className="mainTitle"><span onClick={prevPage}>전체메뉴</span></h3>
                <div className="cntWrap">
                    <div className="cnt">
                        <figure>
                            <div><img src={product.imgUrl} alt={product.title} /></div>
                            <figcaption>
                                <dl>
                                    <dt>{product.title}</dt>
                                    <dd>{product.text}</dd>
                                    <dd className="btnAddCart">
                                        <button type="button" onClick={() => addCart(product)}><BsFillCartPlusFill />담기</button>
                                    </dd>
                                </dl>
                                
                            </figcaption>
                        </figure>
                    </div>
                    <ProductSubEx kcal={product.kcal} allergy={product.allergy} />
                </div>
                <Event />
            </div>
        </section>
    )
}

export default MenuDetail;