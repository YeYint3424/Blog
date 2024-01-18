import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <Row className="m-0 p-0">
      <Col className="m-0 p-0" lg={3}>
        <Sidebar />
      </Col>
      <Col className="m-0 p-0" lg={9}>
        <Navbar />
        <div className="p-4" style={{backgroundColor: "#f8f8f8", minHeight: '86%'}}>
          <Outlet />
        </div>
      </Col>
    </Row>
  );
};

export default AdminLayout;
