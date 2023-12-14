import BigImg from "../components/BigImg";
import pf from "../assets/imgs/pf.png";
import bird from "../assets/imgs/bird.png";
import Links from "../components/Links";
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
import NewLetter from "../components/NewLetter";

const Article = () => {
  const list = [
    {
      url: one,
      text: "Here are some things you should know regarding how we work",
    },
    {
      url: two,
      text: "Granny gives everyone the finger, and other tips from OFFF Barcelona",
    },
    {
      url: three,
      text: "Here are some things you should know regarding how",
    },
    {
      url: four,
      text: "Here are some things you should know regarding",
    },
    {
      url: five,
      text: "Here are some things you should know okakkk",
    },
    {
      url: six,
      text: "Here are some things you should know",
    },
    {
      url: seven,
      text: "Here are some things you should know",
    },
    {
      url: eight,
      text: "Hello world, or, in other words, why this blog exists",
    },
    {
      url: nine,
      text: "Connecting artificial intelligence with digital product design",
    },
    {
      url: ten,
      text: "It’s all about finding the perfect balance",
    },
    {
      url: eleven,
      text: "Clients are part of the team",
    },
    {
      url: twelve,
      text: "Here are some things you should know regarding how we work",
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="col-lg-6 col-md-9 col-sm-12">
          <h1 className="font-sans p-3">
            A few words about this blog platform, Ghost, and how this site was
            made
          </h1>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-3">
      <div className="w-90">
          <BigImg />
        </div>
      </div>
      <div className="d-flex justify-content-center middle">
        <div className="pt-border col-lg-6 col-sm-12 px-4 pt-3">
          <div className="row">
            <div className="col-lg-6 col-sm-12 row">
              <div className=" col-4 d-flex justify-content-center middle">
                <img src={pf} className="w-100 " alt="profile" />
              </div>
              <div className="col-8 d-flex justify-content-start middle">
                <b>
                  Mika MAtikainen
                  <span className="d-block text-s">
                    Apr 15, 2020 · 4 min read
                  </span>
                </b>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-lg-end justify-content-center middle">
              <Links />
            </div>
          </div>
          <div className="px-1 pt-3 mt-3 d-sm-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra.{" "}
            </p>
            <p>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu
              dui molestie, molestie lectus eu, semper lectus.{" "}
            </p>
          </div>
          <div>
            <h4 className="bolder mt-5">Next on the pipeline</h4>
            <p className="mt-4">
              Duis eu velit tempus erat egestas efficitur. In hac habitasse
              platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
              pharetra quis lacus at viverra. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p className="mt-3">
              Morbi efficitur auctor metus, id mollis lorem pellentesque id.
              Nullam posuere maximus dui et fringilla.
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="col-lg-7 col-11 row">
          <div className="col-12">
            <img src={bird} className="w-100 h-100" alt="bird img" />
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-12 col-lg-8">
              <p className="text-s bold text-center">
                Image caption centered this way and I’ll make this a bit longer
                to indicate the amount of line-height.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center middle border-b">
        <div className="col-lg-6 col-sm-12 px-4 pt-3">
          <p>
            Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Aliquam quis posuere ligula.
          </p>
          <p className="mt-4">
            In eu dui molestie, molestie lectus eu, semper lectus. Proin at
            justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi
            arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
            Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
          </p>
          <p>A list looks like this:</p>
          <ul>
            <li>First item in the list</li>
            <li>
              Second item in the list lorem ipsum dolor sit amet nunc felis
              dolor lorem ipsum sit amet
            </li>
            <li>Third item in the list</li>
          </ul>
          <p className="pt-3">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aliquam quis posuere ligula.{" "}
          </p>
          <p className="mb-0">Thanks for reading,</p>
          <p className="mt-0 mb-3">Mika</p>

          <div className="d-md-none">
            <p className="mb-0 semibold">share :</p>
            <Links />
          </div>
          <div className="d-none d-md-flex">
            <div className="card col-md-6">
              <div className="d-flex justify-content-center middle text-md">
                <i className="fa-brands fa-facebook"></i>
                <p className="semibold text-center text-middle">
                  Share on Facebook
                </p>
              </div>
            </div>
            <div className="card col-md-6">
              <div className="d-flex justify-content-center middle text-md">
                <i className="fa-brands fa-twitter"></i>
                <p className="semibold text-center text-middle">
                  Share on Twitter
                </p>
              </div>
            </div>
          </div>

          <p className="semibold mt-4 text-md">
            Tags: <span className="underline">product design</span>,{" "}
            <span className="underline">culture</span>
          </p>

          <div className="border-dot"></div>

          <div>
            <div className="w-30 d-flex justify-content-center float-left">
              <img src={pf} alt="profile" />
            </div>
            <p>
              <span className="bold">Mika Matikainen</span> is a Design Founder
              & Advisor, Berlin School of Creative Leadership Executive MBA
              participant, Zippie advisor, Wolt co-founder, and Nordic Rose
              stakeholder.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-3xl text-center mb-5">What to read next</h1>
        <div className="row">
          {list &&
            list.map((article, index) => (
              <div className="col-md-6 col-lg-4 col-sm-12 mb-3" key={index}>
                <List article={article} />
              </div>
            ))}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="col-12 col-md-5 col-lg-4">
          <NewLetter />
        </div>
      </div>
    </div>
  );
};

export default Article;
