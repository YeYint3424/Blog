import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useAxios } from "../Hooks/useAxios";
import SuccessfulBox from "./common/SuccessfulBox";

const Form = ({ type }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const { sendRequest, loading } = useAxios();
  const [success, setSuccess] = useState(false);

  
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
    };
    sendRequest("/user/signup", data)
      .then((res) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Card style={{ border: 0 }} className="p-5">
        <Card.Body className="position-relative">
          {success && <SuccessfulBox />}
          <Card.Title>
            {type === "login" ? (
              <h2 style={{ fontWeight: "bolder", marginBottom: 30 }}>
                Sign In
              </h2>
            ) : (
              <h2
                className="text-center"
                style={{ fontWeight: "bolder", marginBottom: 30 }}
              >
                Create New Account
              </h2>
            )}
          </Card.Title>
          <Card.Body className="m-0 p-0 row">
            <button className="inputLogin col-12 mb-3 py-1 px-3 text-dark d-flex align-items-center justify-content-center">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                width={25}
                height={25}
              />
              <span style={{ marginLeft: 10 }}>Continue with Google</span>
            </button>
            <div className="d-flex align-items-center justify-content-center">
              <hr style={{ width: 100 }} />
              <p style={{ paddingLeft: 30, paddingRight: 30 }}>or</p>
              <hr style={{ width: 100 }} />
            </div>
            <input
              type="text"
              className="inputLogin col-12 mb-3 py-1 px-3"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            {type == "signUp" && (
              <input
                type="text"
                className="inputLogin col-12 mb-3 py-1 px-3"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            <input
              type="password"
              className="inputLogin col-12 mb-3 py-1 px-3"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {type == "signUp" && (
              <input
                type="password"
                className="inputLogin col-12 mb-5 py-1 px-3"
                placeholder="Confirm Password"
                onChange={(e) => setRePassword(e.target.value)}
              />
            )}

            <Row className="m-0 p-0 d-flex align-items-center justify-content-center">
              {type === "signUp" ? (
                <Col lg={5}>
                  <Link to={"/signin"}>
                    <button className="btn border text-dark rounded-sm w-100 text-20 py-2 mb-3">
                      Sign In
                    </button>
                  </Link>
                </Col>
              ) : (
                <Col lg={5}>
                  <button className="btn btn-dark rounded-sm w-100 text-20 py-2 mb-3">
                    Sign In
                  </button>
                </Col>
              )}
              <Col
                className="d-none d-lg-block d-lg-flex align-items-center justify-content-center"
                lg={2}
              >
                <p>or</p>
              </Col>
              {type === "login" ? (
                <Col lg={5}>
                  <Link to={"/signup"}>
                    <button className="btn border text-dark rounded-sm w-100 text-20 py-2 mb-3">
                      Sign Up
                    </button>
                  </Link>
                </Col>
              ) : (
                <Col lg={5}>
                  {loading ? (
                    <button
                      className="btn btn-dark rounded-sm w-100 text-20 py-2 mb-3"
                      disabled
                    >
                      loading...
                    </button>
                  ) : (
                    <button
                      className="btn btn-dark rounded-sm w-100 text-20 py-2 mb-3"
                      onClick={onSubmit}
                    >
                      Sign Up
                    </button>
                  )}
                </Col>
              )}
            </Row>
          </Card.Body>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Form;
