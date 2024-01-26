import React, { useEffect, useState } from "react";
import { useAxios } from "../../Hooks/useAxios";
import { Field, Form, Formik } from "formik";
import { signInUser } from "../../schema/signUp";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FailBox from "../common/FailBox";
import SuccessfulBox from "../common/SuccessfulBox";
import { useDispatch, useSelector } from 'react-redux';
import { selectAccessToken, setAccessToken } from "../../appredux/tokenSlice";
import { setUser } from "../../appredux/userSlice";

export default function LoginForm() {
  const navigate = useNavigate()
  const { postRequest, loading } = useAxios(); 
  const dispatch = useDispatch();

  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const onSubmitSignIn = async (event, jsonData, setSubmitting) => {
    try {
      event.preventDefault();

      const data = JSON.parse(jsonData);

      const response = await postRequest("/user/signin", {
        username: data.username,
        password: data.password,
      });

      const token = response.token;

      const user = await postRequest("/auth/verify", {
        token: token
      });

      dispatch(setUser(user));
      dispatch(setAccessToken(token));

      setSuccess(true);

      if(user.role === 'admin'){
        navigate('/admin/dashboard')
      }else (
        navigate('/user/profile')
      )

    } catch (error) {
      console.log(error.message);
      setFail(true);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    let timeout;
    if (success || fail) {

      timeout = setTimeout(() => {
        setSuccess(false)
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
          password: ""
        }}
        validationSchema={signInUser}
        onSubmit={(values, { setSubmitting }) => {
            const jsonData = JSON.stringify(values);
            onSubmitSignIn(event, jsonData, setSubmitting);
          }}
      >
        {({ errors, touched }) => (
          <Card style={{ border: 0 }} className="p-5">
            <Card.Body className="position-relative">
              {success && <SuccessfulBox />}
              {fail && <FailBox />}
              <Card.Title>
                <h2 style={{ fontWeight: "bolder", marginBottom: 30 }}>
                  Sign In
                </h2>
              </Card.Title>
              <Card.Body className="m-0 p-0 row">
                <Form>
                  <button type="button" className="inputLogin col-12 mb-3 py-1 px-3 text-dark d-flex align-items-center justify-content-center">
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
                    name="password"
                    type="password"
                    className="inputLogin m-0 mt-4 col-12 py-1 px-3"
                    placeholder="password"
                  />
                  {errors.password && touched.password ? (
                    <b className="text-danger mt-0">{errors.password}</b>
                  ) : null}

                  <Row className="m-0 mt-5 p-0 d-flex align-items-center justify-content-center">
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
                    <Col
                      className="d-none d-lg-block d-lg-flex align-items-center justify-content-center"
                      lg={2}
                    >
                      <p>or</p>
                    </Col>

                    <Col lg={5}>
                      <Link to={"/auth/signup"}>
                        <button className="btn border text-dark rounded-sm w-100 text-20 py-2 mb-3" type='button'>
                          Sign Up
                        </button>
                      </Link>
                    </Col>
                    <Col lg={12}>
                      <Link to={"/"}>
                        <button className="btn border btn-secondary rounded-sm w-100 text-20 py-2 mb-3" type='button'>
                          Back
                        </button>
                      </Link>
                    </Col>
                    
                  </Row>
                </Form>
              </Card.Body>
            </Card.Body>
          </Card>
        )}
      </Formik>
    </div>
  );
}
