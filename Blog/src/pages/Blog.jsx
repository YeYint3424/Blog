import React from "react";
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

const Blog = () => {

  const list = [
    {
      url: one,
      text: "Here are some things you should know regarding how we work"
    },
    {
      url: two,
      text: "Granny gives everyone the finger, and other tips from OFFF Barcelona"
    },
    {
      url: three,
      text: "Here are some things you should know regarding how"
    },
    {
      url: four,
      text: "Here are some things you should know regarding"
    },
    {
      url: five,
      text: "Here are some things you should know okakkk"
    },
    {
      url: six,
      text: "Here are some things you should know"
    },
    {
      url: seven,
      text: "Here are some things you should know"
    },
    {
      url: eight,
      text: "Hello world, or, in other words, why this blog exists"
    },
    {
      url: nine,
      text: "Connecting artificial intelligence with digital product design"
    },
    {
      url: ten,
      text: "It’s all about finding the perfect balance"
    },
    {
      url: eleven,
      text: "Clients are part of the team"
    },
    {
      url: twelve,
      text: "Here are some things you should know regarding how we work"
    }
  ]

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
