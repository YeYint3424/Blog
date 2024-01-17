import { Col } from "react-bootstrap";
import { MdDashboard } from "react-icons/md";
import {
  FaClipboardList,
  FaUsers,
  FaUsersSlash,
  FaSignOutAlt,
} from "react-icons/fa";
import AccountCard from "../common/AccountCard";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="py-4 px-2 border-sidebar position-relative">
      <h2 className="text-center pb-4 text-primary bolder">Blog Logo</h2>

      <ul className="pt-2">
        <Link to={'/admin/dashboard'}>
          <li className="side-list d-flex align-items-center justify-content-start">
            <MdDashboard style={{ marginRight: ".5rem" }} />
            Dashboard
          </li>
        </Link>
        <Link to={'/admin/blog-list'}>
          <li className="side-list d-flex align-items-center justify-content-start">
            <FaClipboardList style={{ marginRight: ".5rem" }} /> Blogs List
          </li>
        </Link>
        <Link to={'/admin/user-list'}>
          <li className="side-list d-flex align-items-center justify-content-start">
            <FaUsers style={{ marginRight: ".5rem" }} />
            User List
          </li>
        </Link>
        <Link to={'/admin/management'}>
          <li className="side-list d-flex align-items-center justify-content-start">
            <FaUsers style={{ marginRight: ".5rem" }} />
            Admin Management
          </li>
        </Link>
        <Link to={'/admin/category'}>
          <li className="side-list d-flex align-items-center justify-content-start">
            <FaClipboardList style={{ marginRight: ".5rem" }} />
            Category
          </li>
        </Link>
        <Link to={'/admin/block-list'}>
          <li className="side-list d-flex align-items-center justify-content-start">
            <FaUsersSlash style={{ marginRight: ".5rem" }} />
            Block List
          </li>
        </Link>
        <Link to={'/admin/logout'}>
          <li className="side-list d-flex align-items-center justify-content-start">
            <FaSignOutAlt style={{ marginRight: ".5rem" }} />
            Logout
          </li>
        </Link>
      </ul>

      <AccountCard />
    </div>
  );
};

export default Sidebar;
