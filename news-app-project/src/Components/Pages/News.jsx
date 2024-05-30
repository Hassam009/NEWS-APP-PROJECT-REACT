
import NewsItem from "./NewsItem";

const News = () => {
  return (
    <div>
      <h1>I am News Component</h1>
      <NewsItem title="I am NEWS TITLE"  description="I am description of news passed as a props"/>
    </div>
  );
}

export default News;
