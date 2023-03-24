import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "../component/NewsItem";

import './News.css'

const News = () => {
    const [news, setNews] = useState([]) // data담기
    useEffect(() => { // data가져오기
        const fetchData = async() => {
            const response = await axios.get('../json/newsData.json')
            setNews(response)
        }
        fetchData()
    },[])

    console.log(news.data)
    return(
        <>
        <section className="newsWrap subWrap">
            <div className="comWebWidth">
                <h3 className="mainTitle">새로운 소식</h3>
                <div className="cntWrap">
                    <NewsItem data={news.data} />
                </div>
            </div>
        </section>
        </>
    )
}

export default News;