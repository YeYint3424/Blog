import React, { useEffect, useState } from "react";
import one from "../assets/imgs/one.png";
import two from "../assets/imgs/two.png";
import three from "../assets/imgs/three.png";
import four from "../assets/imgs/four.png";
import five from "../assets/imgs/five.png";
import six from "../assets/imgs/six.png";
import seven from "../assets/imgs/seven.png";
import eight from "../assets/imgs/eight.png";
import nine from "../assets/imgs/nine.png";
import ten from "../assets/imgs/ten.png";
import eleven from "../assets/imgs/six.png";
import twelve from "../assets/imgs/twelve.png";
import List from "../components/List";
import BigImg from "../components/BigImg";
import axios from "axios";

const Blog = () => {
const [list,setList]= useState()

  useEffect(()=>{
    const fetchData = async() => {
      try {
        const response = await axios.get('http://localhost:8888/api/v1/blog/home-blog')
        setList(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center mt-3 row">
        <div className="col-md-8 col-sm-10 text-center">
          <BigImg />
          <h2 className="p-4">
            A few words about this blog platform, Ghost, and how this site was
            made
          </h2>
          <div className="d-flex justify-content-center row">
            <div className="col-11">
              <div className="p-3 w-100 border-bottom border-black">
                <p>
                  Why Ghost (& Figma) instead of Medium, WordPress or other
                  options?
                </p>
              </div>

              <h3 className="mt-4 font-sans">All articles</h3>
              <div className="mt-3 d-flex justify-content-md-between justify-content-lg-between justify-content-sm-center row">
                {list && list.map((article, index)=>(
                <div className="col-md-6 col-lg-6 col-sm-12 mb-3" key={index}>
                  <List article={article}/>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
