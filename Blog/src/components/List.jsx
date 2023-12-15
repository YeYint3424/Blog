const List = ({ article }) => {
  return (
    <div className="d-flex justify-content-center row m-0">
      <div className="w-90">
        <img src={article.url} alt="list's img" className="w-100 h-100" />
      </div>
      <p className="w-90 font-s semibold text-center">{article.text}</p>
    </div>
  );
};

export default List;
