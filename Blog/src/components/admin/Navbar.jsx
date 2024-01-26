import { BsBell } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation()
  return (
    <div className="border-bottom w-100 m-0">
      <div className="d-flex aligh-align-items-center justify-content-between py-4 px-5 m-0">
        {location.pathname === '/admin/dashboard'&&<h2>DashBoard</h2>}
        {location.pathname === '/admin/blog-list'&&<h2>Blog-List</h2>}
        {location.pathname === '/admin/user-list'&&<h2>User-List</h2>}
        {location.pathname === '/admin/management'&&<h2>Management</h2>}
        {location.pathname === '/admin/category'&&<h2>Category</h2>}
        {location.pathname === '/admin/block-list'&&<h2>Block-List</h2>}
        {location.pathname === '/admin/profile'&&<h2>Profile</h2>}
        <div
          style={{
            border: "1px solid #000",
            borderRadius: "4px",
            width: "2rem",  
            height: "2rem", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsBell size={20} color="#000" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
