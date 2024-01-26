import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../appredux/userSlice";
import toast from "react-hot-toast";

const UserLayout = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    useEffect(() => {
      if (!user || user.role !== 'user'  || user.status !== 'active') {
          toast.error("You are not authenticated as a user");
          navigate('/auth/login');
      }
  }, [user, navigate]);
  return (
    <div className="bg-back">
      <NavBar />
      <div className="pt-4rem" style={{ backgroundColor: "#efefef" }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
