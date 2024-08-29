import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
const NewsBoard = ({ category}) => {

    const [articles, setArticles] = useState([]);
    


    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
        console.log(articles);
    },[category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles?.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} url={news.url } src={news.urlToImage} />
            })}
        </div>
    );
}

export default NewsBoard;