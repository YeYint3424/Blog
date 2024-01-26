import { Link } from "react-router-dom";

const List = ({ article }) => {
  return (
    <div className="d-flex justify-content-center row m-0">
      <Link to={`/article/${article.id}`}>
      <div className="w-90">
        <img src={article.url} alt="list's img" className="w-100" height={150}/>
      </div>
      </Link>
      <p className="w-90 font-s semibold text-center">{article.title}</p>
    </div>
  );
};

export default List;
