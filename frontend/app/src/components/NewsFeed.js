const NewsFeed = (props) => {
  console.log(props.newsArticles);
  return (
    <div className="news">
      {props.newsArticles.map((articles) => (
        <div className="articleBox">
          <img src={articles.urlToImage} alt="" className="image3"></img>
          <div className="articleText">
            <a href={articles.url} className="article">
              {articles.title}
            </a>
            <a className="description">{articles.description}</a>
            <a className="publishDate">{articles.publishedAt}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
