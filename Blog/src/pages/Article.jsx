import BigImg from "../components/BigImg";
import pf from "../assets/imgs/pf.png";
import bird from "../assets/imgs/bird.png";

const Article = () => {
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
        <div className="col-lg-8 col-md-10 col-12">
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
              <div className="d-flex justify-content-lg-end justify-content-center middle text-center">
                <div className="card px-3 py-2 m-2">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="card px-3 py-2 m-2">
                  <i className="fa-brands fa-square-twitter"></i>
                </div>
                <div className="card px-3 py-2 m-2 d-lg-none">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
              </div>
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
      <div className="d-flex justify-content-center middle">
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
          <p className="mt-0">Mika</p>

          
        </div>
      </div>
    </div>
  );
};

export default Article;
