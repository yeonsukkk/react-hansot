import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MenuOption from '../component/MenuOption'
import {fetchAllProduct} from '../store'
import MenuItem from '../component/MenuItem'

import './Menu.css'

const Menu = () => {
    // 데이터 불러오기
    let {productData} = useSelector(state => state)
    const dispatch = useDispatch()
    //console.log(productData.data)
    useEffect(() => {
        dispatch(fetchAllProduct('./json/product.json'))
    }, [dispatch])

    // 원하는 항목 체크 -> 텍스트 (h3Tag)
    const [sortMsg, setSortMsg] = useState([])
    const getOption = (get) => { // 원하는 항목 체크 가져오기
        setSortMsg([...sortMsg, get])
    }
    const removeOption = (remove) => { // 원하는 항목 삭제 가져오기
        let removeIdx = sortMsg.indexOf(remove)
        let result = sortMsg.filter((item, idx) => idx !== removeIdx)
        setSortMsg(result)
    }

    // 원하는 항목 체크 -> 상품 데이터
    const includeProduct = productData.data.filter(item => {
        let intersection = item.category.map(x => {
            // console.log(sortMsg, x, sortMsg.includes(x))
            return sortMsg.includes(x)
        })
        // console.log(intersection)
        return intersection.includes(true)
    })

    // 검색 필터 제목
    const resultSortMsg = () => {
        return sortMsg.length < 1 ? {__html : '전체상품입니다.'} : {__html : `<strong class="result">'${sortMsg.join(', ')}'</strong> 를 검색한 상품입니다.`}
    }

    return(
        <section className="menuWrap subWrap">
            <div className="comWebWidth">
                <h3 className="mainTitle">한솥 메뉴</h3>
                <div className="cntWrap">
                    <MenuOption
                        getOption={getOption}
                        removeOption={removeOption}
                    />
                    <article className="menuList">
                        <h3 className="subTitle" dangerouslySetInnerHTML={resultSortMsg()}></h3>
                        <div>
                            <MenuItem
                                data={
                                    sortMsg.length < 1
                                    ? productData.data
                                    : includeProduct
                                }

                                sortMsg={sortMsg}
                            />
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Menu;