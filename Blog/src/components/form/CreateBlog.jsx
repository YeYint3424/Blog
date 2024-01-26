import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUser } from "../../appredux/userSlice";
import { Api } from "../../constants/API";
import axios from "axios";
import { selectAccessToken } from "../../appredux/tokenSlice";
import SuccessFulBox from '../common/SuccessfulBox'
import FailBox from '../common/FailBox'
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()
  const user = useSelector(selectUser);
  const token = useSelector(selectAccessToken);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
  useEffect(() => {
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
  }, [user]);
  if (!user) {
    return null;
  }

  const handleSubmit = async () => {
    try {
      const addblog = await axios.post(
        `${Api}/blog/create`,
        {
          title: title,
          content: content,
          category: category,
          url_list: imageUrls, 
        },
        {
          headers: {
            token: token,
          },
        }
      );
      
      setSuccess(true)
      setTimeout(()=>{
        setSuccess(false)
        navigate('/')
      },2000)
    } catch (error) {
      setFail(true)
      setTimeout(()=>{
        setFail(false)
      },2000)
    }
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (event) => {
            resolve(event.target.result);
          };

          reader.onerror = (error) => {
            reject(error);
          };

          reader.readAsDataURL(file);
        });
      })
    )
      .then((imageDataUrls) => {
        setImages(files);
        setImageUrls(imageDataUrls); 
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Row style={{ minHeight: 400 }}>
      {success && 
      <Col lg={12} className="m-0 p-0 d-flex justify-content-center align-items-center" >
        <SuccessFulBox />
      </Col>
      }
      {fail && 
      <Col lg={12} className="m-0 p-0 d-flex justify-content-center align-items-center" >
        <FailBox />
      </Col>
      }
      <Col lg={6} className="px-5">
        <div className="px-5">
          <b>Title</b>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="inputLogin"
          />
        </div>
        <div className="px-5">
          <b>Image</b>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="inputLogin"
            multiple 
          />
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt="Preview"
              style={{ maxWidth: "100%" }}
            />
          ))}
        </div>
      </Col>
      <Col lg={6}>
        <div className="px-5">
          <b>Category</b>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="inputLogin"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="px-5">
          <b>Content</b>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="inputLogin"
            rows={5}
          />
        </div>

        <div className="px-5">
          <button
            className="btn btn-primary btn-md w-100"
            onClick={handleSubmit}
          >
            <b>Submit</b>
          </button>
        </div>
      </Col>
    </Row>
  );
}
