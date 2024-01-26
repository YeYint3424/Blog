import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../appredux/userSlice";
import toast from "react-hot-toast";

const AdminLayout = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  useEffect(()=>{
    if( !user ||user.role != 'admin'  || user.status !== 'active'){
      toast.error("You are not authenticated as an admin");
      navigate('/auth/login')
      
    }
  },[user])
  return (
    <Row className="m-0 p-0">
      <Col className="m-0 p-0" lg={3}>
        <Sidebar />
      </Col>
      <Col className="m-0 p-0" lg={9}>
        <Navbar />
        <div
          className="p-4"
          style={{ backgroundColor: "#f8f8f8", minHeight: "86%" }}
        >
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </Col>
    </Row>
  );
};

export default AdminLayout;
