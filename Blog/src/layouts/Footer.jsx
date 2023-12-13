import Marquee from "react-fast-marquee";

const loop = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];
const Footer = () => {
  return (
    <div className="bg-dark text-light pb-4">
      <div className="pt-2">
        <Marquee>
          <div className="w-100 text-trg">
            {loop.map((loop) => (
              <b key={loop.id}>
                Digital product design
                <span className="m-3">Remote work</span>
                UX design
                <span className="m-3">Distributed teams</span>
                Creativity
                <span className="m-3">Strategy</span>
                Suspense
                <span className="m-3">Growth</span>
              </b>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <div className="w-75 text-center">
          <h3>NORDIC ROSE</h3>
          <div className="d-flex justify-content-center">
            <p className="text-xs col-md-5 col-sm-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
              velit tempus erat egestas efficitur. In hac habitasse platea
              dictumst. Fusce a nunc eget ligula suscipit finibus.
            </p>
          </div>
          <div className="d-flex justify-content-center mt-2 mb-3">
            <div className="footer-links text-s row">
              <a href="#" className="text-light col-4">
                Twitter
              </a>
              <a href="#" className="text-light col-4">
                LinkedIn
              </a>
              <a href="#" className="text-light col-4">
                RSS
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="text-xs">
              <p className="m-0 p-0">© 2012–2020 Nordic Rose Co.</p>
              <p className="m-0 p-0">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
