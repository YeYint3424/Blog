import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import FailBox from "../../components/common/FailBox";
import SuccessfulBox from "../../components/common/SuccessfulBox";
import { Api } from "../../constants/API";
import { selectUser } from "../../appredux/userSlice";
import { useSelector } from "react-redux";

export default function BlogDetail() {
  const { blogId } = useParams();
  const [data, setData] = useState(null);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [cat, setCat] = useState("");
  const [categories, setCategories] = useState("");
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8888/api/v1/blog/blog-profile/${blogId}`
        );
        setData(response.data);
        setTitle(response.data.title);
        setContent(response.data.content);
        setCategory(response.data.category_id);
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchCat = async () => {
      try {
        const cat = await axios.get(`${Api}/category/all`);
        console.log(cat.data);
        setCategories(cat.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCat();
    fetchData();
  }, [user, success, fail]);
  if (!user) {
    return null;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  const handleDelete = async (blogId) => {
    try {
      console.log(blogId);
      const data = await axios.patch(
        `http://localhost:8888/api/v1/blog/delete/${blogId}`
      );
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate("/user/profile");
      }, 2000);
    } catch (error) {
      setFail(true);
      setTimeout(() => {
        setFail(false);
      }, 2000);
    }
  };

  const handleUpdate = async (blogId) => {
    try {
      const update = await axios.patch(
        `http://localhost:8888/api/v1/blog/update/${blogId}`,
        {
          title : title,
          content : content,
          category : category
        }
      );

      console.log(update);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      setFail(true);
      setTimeout(() => {
        setFail(false);
      }, 2000);
    }
  };
  return (
    <div className="px-5 pb-5" style={{ fontFamily: "serif" }}>
      <Row className="mb-5 d-flex justify-content-center align-items-center">
        <Col
          lg={8}
          className="d-flex justify-content-center align-items-center"
        >
          <img src={data.img[0]} alt="img" height={300} />
        </Col>
        {fail && (
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center"
          >
            <FailBox />
          </Col>
        )}
        {success && (
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center"
          >
            <SuccessfulBox />
          </Col>
        )}
      </Row>
      <Row className="px-5">
        <Col lg={6} className="px-5">
          <Row>
            <Col lg={3}>
              <h5 className="bold">Title</h5>
            </Col>
            <Col lg={6}>
              <input
                type="text"
                value={title}
                className="bold"
                style={{
                  border: "none",
                  outline: "none",
                  background: "#90ee9000",
                }}
                onChange={(e) => setTitle(e.target.value)}
                disabled={data.blogStatus == "rejected"}
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col lg={3}>
              <h5 className="bold">Category</h5>
            </Col>
            <Col lg={6}>
              <select
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                className="inputLogin"
                disabled={data.blogStatus == "rejected"}
              >
                {categories.map((cat) => (
                  <option
                    key={cat._id}
                    value={cat._id}
                    selected={cat._id === category}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          {data.blogStatus != "rejected" ? (
            <>
              <div className="d-flex justify-content-start align-items-center">
                <button
                  className="btn btn-danger text-light bold btn-detail w-50 mx-1"
                  onClick={() => handleDelete(data.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning text-dark bold btn-detail w-50 mx-1"
                  onClick={() => handleUpdate(data.id)}
                >
                  Update
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </Col>
        <Col lg={6}>
          <h5 className="bold">Content</h5>
          <textarea
            className="textbox"
            value={content}
            multiple
            onChange={(e) => setContent(e.target.value)}
            disabled={data.blogStatus == "rejected"}
          />
        </Col>
      </Row>
      
    </div>
  );
}
