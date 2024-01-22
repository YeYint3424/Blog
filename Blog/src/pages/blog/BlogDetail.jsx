import React from "react";
import { Col, Row } from "react-bootstrap";

export default function BlogDetail() {
  return (
    <div className="p-5" style={{ fontFamily: "serif" }}>
      <div className="border-bottom">
        <Row style={{ paddingBottom: 30 }}>
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <h5 className="bold">Title</h5>
              </Col>
              <Col lg={6}>
                <h5>{"OK par"}</h5>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg={6}>
                <h5 className="bold">Category</h5>
              </Col>
              <Col lg={6}>
                <h5>{"IT"}</h5>
              </Col>
            </Row>
            <div>
              <button className="btn btn-warning text-light btn-detail">
                Update
              </button>
              <button className="btn btn-danger text-light btn-detail">
                Delete
              </button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="bold">Content</h5>
              <h5>{"Why is WHy"}</h5>
            </div>
            <h5 className="bold mt-2">Description</h5>
            <div className="textbox mt-4">
              {
                "Paragraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papersParagraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph."
              }
            </div>
          </Col>
        </Row>
      </div>
      <Row className="mt-5">
        <Col lg={6} className="mb-3">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="img"
            width={"100%"}
          />
        </Col>
        <Col lg={6} className="mb-3">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="img"
            width={"100%"}
          />
        </Col>
        <Col lg={6} className="mb-3">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="img"
            width={"100%"}
          />
        </Col>
        <Col lg={6} className="mb-3">
          <img
            src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
            alt="img"
            width={"100%"}
          />
        </Col>
      </Row>
    </div>
  );
}
