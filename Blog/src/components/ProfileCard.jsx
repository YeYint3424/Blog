import React, { useEffect } from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectUser } from "../appredux/userSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const user = useSelector(selectUser);
  const navigate = useNavigate()
  useEffect(() => {
    if (!user || Object.keys(user).length === 0 || user.status !== 'active') {
        navigate('/auth/login');
    }
}, [user, navigate]);

if (!user) {
  return null;
}
  return (
    <Card>
      <CardBody>
        <Row>
          <Col
            lg={6}
            className="px-5 d-flex align-items-end justify-content-start"
          >
            <div className="px-5">
              <img
                src="https://publicdomainvectors.org/tn_img/abstract-user-flat-1.webp"
                style={{ borderRadius: 999 }}
                alt="profile pic"
                width={100}
                height={100}
              />
              <p className="mt-3 profile-name">
                Username : {user.username.toUpperCase()}
              </p>
            </div>
          </Col>
          <Col lg={6} className="d-flex align-items-end justify-content-start">
            <div>
              <p className="profile-name mb-4">
                {user.status == "active" ? (
                  <span style={{color: '#31a24c'}}>{user.status.toUpperCase()}</span>
                ) : (
                  <span className="text-danger">{user.status.toUpperCase()}</span>
                )}
              </p>
              <p className="profile-name">Email : {user.email.toUpperCase()}</p>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
