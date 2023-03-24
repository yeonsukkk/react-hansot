import './NewsItem.css'

const NewsItem = ({data}) => {
    // console.log(data)
    const changeDate = (getDate) => {
        let d = new Date(getDate)
        let m = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
        let dd = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
        return `${d.getFullYear()}-${m}-${dd}`
    }
    return(
        <div className="newsItemWrap">
            {
                data?.map(item => {
                    return(
                        <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id}>
                            <figure>
                                <div>
                                    <img src={item.imgUrl} alt={item.title} />
                                </div>
                                <figcaption>
                                    <dl>
                                        <dt>{item.title}</dt>
                                        <dd className="text">{item.text}</dd>
                                        <dd className="date">{changeDate(item.date)}</dd>
                                    </dl>
                                </figcaption>
                            </figure>
                        </a>
                    )
                })
            }
        </div>
    )
}

export default NewsItem;