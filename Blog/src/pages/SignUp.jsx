import { Col, Container, Row } from "react-bootstrap";
import login from "../assets/imgs/login.png";
import Form from "../components/form";

const SignUp = () => {
    return ( 
        <div className="position-relative">
      <h2
        className="d-block d-lg-none mt-3"
        style={{ fontWeight: "bold", marginLeft: 50 }}
      >
        Logo
      </h2>
      <Row className="p-0 mx-0 position-relative justify-content-center align-items-center">
        <Col
          className="d-flex justify-content-center position-relative p-0 m-0"
          sm={12}
          lg={6}
        >
          <h2
            className="position-absolute d-none d-md-none d-lg-block"
            style={{ fontWeight: "bold", zIndex: 1000, left: 100, top: 15 }}
          >
            Logo
          </h2>
          <img
            src={login}
            alt="login image"
            style={{ zIndex: 1 }}
            className="d-none d-lg-block p-0"
            width={550}
            height={677}
          />
          <img
            src={login}
            alt="login image"
            className="d-block d-lg-none w-100"
            height={300}
          />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center p-5 pt-0"
          sm={12}
          lg={6}
        >
          <Form type={'signUp'}/>
        </Col>
      </Row>
    </div>
     );
}
 
export default SignUp;