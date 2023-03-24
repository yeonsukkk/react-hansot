import { BsCartXFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './MenuItem.css'

const MenuItem = ({data}) => {
    if(data.length < 1) {
        return(
            <>
                <p className="noItem"><BsCartXFill /><br />죄송합니다<br />해당 상품이 없습니다.</p>
            </>
        )
    }
    return(
        <>
            {
                data?.map(item => {
                    return (
                        <Link key={item.id} to={`/menu/${item.slug}`}>
                            <figure>
                                <div>
                                    <img src={item.imgUrl} alt={item.title} />
                                </div>
                                <figcaption>
                                    <dl>
                                        <dt>{item.title}</dt>
                                        <dd>{item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</dd>
                                        <dd>
                                            카테고리 : {item.category.join(', ')}
                                        </dd>
                                    </dl>
                                </figcaption>
                            </figure>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default MenuItem;