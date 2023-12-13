const List = ({ article }) => {
  return (
    <div className="d-flex justify-content-center row">
      <div className="w-90 col-12">
        <img src={article.url} alt="list's img" className="w-100 h-100" />
      </div>
      <p className="w-90 font-sm col-12">{article.text}</p>
    </div>
  );
};

export default List;
