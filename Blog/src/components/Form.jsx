import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useAxios } from "../Hooks/useAxios";
import SuccessfulBox from "./common/SuccessfulBox";
import FailBox from "./common/FailBox";
import { Field, Form, Formik } from "formik";
import SignUpSchema from "../schema/signUp";

const FormAuth = ({ type }) => {
  const { postRequest, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const onSubmitSignUp = async (e, jsonData) => {
    e.preventDefault();
    const data = JSON.parse(jsonData);
    await postRequest("/user/signup", {
      username: data.username,
      email: data.email,
      password: data.password,
    })
      .then((res) => {
        setSuccess(true);
      })
      .catch((err) => {
        setFail(true);
      });
  };

  const onSubmitSignIn = async (e, jsonData) => {
    e.preventDefault();

    const data = JSON.parse(jsonData);
    await postRequest("/user/signin", {
      username: data.username,
      password: data.password,
    })
      .then((res) => {
        setSuccess(true);
      })

      .catch((err) => {
        setFail(true);
      });
  };
  useEffect(() => {
    let timeout;
    if (success || fail) {
      timeout = setTimeout(() => {
        setSuccess(false);
        setFail(false);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [success, fail]);
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          rePassword: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          const jsonData = JSON.stringify(values);

          type === "signUp"
            ? onSubmitSignUp(event, jsonData)
            : onSubmitSignIn(event, jsonData);
        }}
      >
        {({ errors, touched }) => (
          <Card style={{ border: 0 }} className="p-5">
            <Card.Body className="position-relative">
              {success && <SuccessfulBox />}
              {fail && <FailBox />}
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
                <Form>
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

                  <Field
                    name="username"
                    type="text"
                    className="inputLogin m-0 col-12 py-1 px-3"
                    placeholder="username"
                  />
                  {errors.username && touched.username ? (
                    <b className="text-danger mt-0">{errors.username}</b>
                  ) : null}
                      <Field
                        name="email"
                        type="text"
                        className="inputLogin m-0 mt-4 col-12 py-1 px-3"
                        placeholder="email"
                      />
                      {errors.email && touched.email ? (
                        <b className="text-danger mt-0">{errors.email}</b>
                      ) : null}
                  <Field
                    name="password"
                    type="password"
                    className="inputLogin m-0 mt-4 col-12 py-1 px-3"
                    placeholder="password"
                  />
                  {errors.password && touched.password ? (
                    <b className="text-danger mt-0">{errors.password}</b>
                  ) : null}
                      <Field
                        name="rePassword"
                        type="password"
                        className="inputLogin m-0 mt-4 col-12 py-1 px-3"
                        placeholder="Confirm Password"
                      />
                      {errors.rePassword && touched.rePassword ? (
                        <b className="text-danger mt-0">{errors.rePassword}</b>
                      ) : null}

                  <Row className="m-0 mt-5 p-0 d-flex align-items-center justify-content-center">
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
                            type="submit"
                          >
                            Sign In
                          </button>
                        )}
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
                            type="submit"
                          >
                            Sign Up
                          </button>
                        )}
                      </Col>
                    )}
                  </Row>
                </Form>
              </Card.Body>
            </Card.Body>
          </Card>
        )}
      </Formik>
    </div>
  );
};

export default FormAuth;
