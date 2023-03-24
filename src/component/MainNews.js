import { useCallback, useEffect, useState } from "react";

import NewsItem from '../component/NewsItem'
import './MainNews.css'

const MainNews = () => {
    const [newsData, setNewsData] = useState([]);
    const fetchData = useCallback(() => {
        fetch('../json/newsData.json')
        .then(response => response.json())
        .then(data => setNewsData(data))
    })
    useEffect(fetchData, [])

    const sortData = newsData.slice(-3).reverse()
    return(
        <section className="mainNewsWrap comWebWidth">
            <h3>NEWS</h3>
            <NewsItem data={sortData} />
        </section>
    )
}

export default MainNews;