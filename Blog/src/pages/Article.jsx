import pf from "../assets/imgs/pf.png";
import bird from "../assets/imgs/bird.png";
import Links from "../components/Links";
import eyes from "../assets/imgs/eyes.png";
import List from "../components/List";
import { useEffect, useState } from "react";
import axios from "axios";
import { Api } from "../constants/API";
import { useParams } from "react-router-dom";

const Article = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const { blogId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/api/v1/blog/home-blog`);
        setList(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    fetchData();
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await axios.get(
          `http://localhost:8888/api/v1/blog/blog-profile/${blogId}`
        );
        setData(blog.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchBlog();
  }, [blogId]);
  return (
    <div>
          <div className="d-flex justify-content-center middle">
            <div className="col-lg-6 col-sm-12 px-4 pt-3">
              <div className="row">
                <div className="col-lg-6 col-sm-12 row">
                  <div className=" col-4 d-flex justify-content-center middle">
                    <img src={pf} className="w-100 " alt="profile" />
                  </div>
                  <div className="col-8 d-flex justify-content-start middle">
                    <b>
                      {data.username}
                      <span
                        className={`d-block text-s bold ${
                          data.userStatus === "active"
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {data.userStatus}
                      </span>
                    </b>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12 d-flex justify-content-lg-end justify-content-center middle">
                  <Links />
                </div>
              </div>

              <div>
                <h4 className="bolder mt-3">{data.title}</h4>
                <p className="mt-4">
                  {data.content}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <div className="col-lg-7 col-11 row">
              <div className="col-12">
                <img src={data.img} className="w-100 h-100" alt="bird img" />
              </div>
            </div>
          </div>
        
      <div className="border-b"></div>
      <div className="eyes">
        <img src={eyes} className="eyes-img" alt="eyes png" />
      </div>
      <div className="mt-5">
        <h1 className="text-3xl text-center mb-5">What to read next</h1>
        <div className="d-flex justify-content-md-between justify-content-lg-between justify-content-sm-center row">
          {list &&
            list.map((article, index) => (
              <div
                className="col-md-6 col-lg-4 col-sm-12 mb-3 mx-0"
                key={index}
              >
                <List article={article} />
              </div>
            ))}
        </div>
      </div>

      {/* <div className="d-flex justify-content-center">
        <div className="col-12 col-md-5 col-lg-4">
          <NewLetter />
        </div>
      </div> */}
    </div>
  );
};

export default Article;
