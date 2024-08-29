import default_image from "../Assets/Designer (3).jpeg";

const NewsItem = ({ title, description, url, src }) => {
    return (
            <div className="card bg-dark text-light mb-3 my-3 mx-3 py-2 px-2" style={{maxWidth:"345px", display: "inline-block"}}>
                <img src={src? src: default_image} style={{height: "200px", width: "325px"}}className="card-img-top" alt="loading..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{ description?description.slice(0,90):"Stay informed with the latest updates and stories from around the world. Check back soon for more details on this news item." }</p>
                    <a href={url} className="btn btn-primary">Read More</a>
                </div>
            </div>
    );
        
}

export default NewsItem;