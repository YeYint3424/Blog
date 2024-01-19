import React from "react";
import { Card, CardBody, Col, Row } from "react-bootstrap";

export default function ProfileCard({ user }) {
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
                Username : {user.name.toUpperCase()}
              </p>
            </div>
          </Col>
          <Col lg={6} className="d-flex align-items-end justify-content-start">
            <div>
              <p className="profile-name mb-4">
                Status :{" "}
                {user.status == "Active" ? (
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
