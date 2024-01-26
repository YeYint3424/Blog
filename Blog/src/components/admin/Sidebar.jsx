import { Button, Col } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import {
  FaClipboardList,
  FaUsers,
  FaUsersSlash,
  FaSignOutAlt,
} from "react-icons/fa";
import AccountCard from "../common/AccountCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearAccessToken } from "../../appredux/tokenSlice";
import { clearUser } from "../../appredux/userSlice";
import { useDispatch } from "react-redux";
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(clearAccessToken());
    dispatch(clearUser());
    navigate("/");
  };
  return (
    <div className="py-4 px-2 border-sidebar position-relative">
      <h2 className="text-center pb-4 text-primary bolder">Blog Logo</h2>

      <ul className="pt-2">
        <Link to={"/admin/dashboard"}>
          <li
            className={
              location.pathname === "/admin/dashboard"
                ? "side-list d-flex align-items-center justify-content-start sideBar-admin px-2 mb-1 "
                : "side-list d-flex align-items-center justify-content-start px-2 mb-1"
            }
          >
            <MdDashboard style={{ marginRight: ".5rem" }} />
            Dashboard
          </li>
        </Link>
        <Link to={"/admin/blog-list"}>
          <li
            className={
              location.pathname === "/admin/blog-list"
                ? "side-list d-flex align-items-center justify-content-start sideBar-admin px-2 mb-1 "
                : "side-list d-flex align-items-center justify-content-start px-2 mb-1"
            }
          >
            <FaClipboardList style={{ marginRight: ".5rem" }} /> Blogs List
          </li>
        </Link>
        <Link to={"/admin/user-list"}>
          <li
            className={
              location.pathname === "/admin/user-list"
                ? "side-list d-flex align-items-center justify-content-start sideBar-admin px-2 mb-1 "
                : "side-list d-flex align-items-center justify-content-start px-2 mb-1"
            }
          >
            <FaUsers style={{ marginRight: ".5rem" }} />
            User List
          </li>
        </Link>
        <Link to={"/admin/management"}>
          <li
            className={
              location.pathname === "/admin/management"
                ? "side-list d-flex align-items-center justify-content-start sideBar-admin px-2 mb-1 "
                : "side-list d-flex align-items-center justify-content-start px-2 mb-1"
            }
          >
            <FaUsers style={{ marginRight: ".5rem" }} />
            Admin Management
          </li>
        </Link>
        <Link to={"/admin/category"}>
          <li
            className={
              location.pathname === "/admin/category"
                ? "side-list d-flex align-items-center justify-content-start sideBar-admin px-2 mb-1 "
                : "side-list d-flex align-items-center justify-content-start px-2 mb-1"
            }
          >
            <FaClipboardList style={{ marginRight: ".5rem" }} />
            Category
          </li>
        </Link>
        <Link to={"/admin/block-list"}>
          <li
            className={
              location.pathname === "/admin/block-list"
                ? "side-list d-flex align-items-center justify-content-start sideBar-admin px-2 mb-1 "
                : "side-list d-flex align-items-center justify-content-start px-2 mb-1"
            }
          >
            <FaUsersSlash style={{ marginRight: ".5rem" }} />
            Block List
          </li>
        </Link>
        <Button onClick={handleLogout} type="button" style={{background:'white', border : 'none', color: "black", listStyle: 'none', width: '100%', textAlign: 'left'}}>
          <li>
            <FaSignOutAlt style={{ marginRight: ".5rem" }} />
            Logout
          </li>
        </Button>
      </ul>

      <Link to={"/admin/profile"}>
        <AccountCard />
      </Link>
    </div>
  );
};

export default Sidebar;
