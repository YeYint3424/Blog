import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, selectUser } from "../appredux/userSlice";
import { clearAccessToken } from "../appredux/tokenSlice";

const NavBar = () => {
  const location = useLocation();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearAccessToken());
    dispatch(clearUser());
    navigate("/");
  };
  return (
    <Navbar
      expand="lg"
      className="p-0 absolute"
      style={{ backgroundColor: "#efefef", borderBottom: "1px solid #ccc" }}
    >
      <Container>
        <Navbar.Brand className="text-xl p-0" href="">
          NORDIC ROSE
        </Navbar.Brand>
        <Navbar.Toggle
          className="outline-none"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end gap-3 p-0"
        >
          <Nav className="justify-content-end gap-2 p-0" activeKey="/home">
            {user == null ? (
              <NavLink
                to="/"
                className={
                  location.pathname === "/"
                    ? "navBar-client-active"
                    : "navBar-client"
                }
              >
                Home
              </NavLink>
            ) : user.role == "admin" ? (
              <NavLink
                to="/admin/dashboard"
                className={
                  location.pathname === "/"
                    ? "navBar-client-active"
                    : "navBar-client"
                }
              >
                Home
              </NavLink>
            ) : (
              <NavLink
                to="/"
                className={
                  location.pathname === "/"
                    ? "navBar-client-active"
                    : "navBar-client"
                }
              >
                Home
              </NavLink>
            )}
            {/* <NavLink
              to="/article"
              className={
                location.pathname === "/article"
                  ? "navBar-client-active"
                  : "navBar-client"
              }
            >
              Blog
            </NavLink> */}
            {user && user.role == "user" ? (
              <>
                <NavLink
                  to="/user/create-blog"
                  className={
                    location.pathname === "/user/create-blog"
                      ? "navBar-client-active"
                      : "navBar-client"
                  }
                >
                  Create Blog
                </NavLink>
                <NavLink
                  to="/user/profile"
                  className={
                    location.pathname === "/user/profile"
                      ? "navBar-client-active"
                      : "navBar-client"
                  }
                >
                  Profile
                </NavLink>
                <NavLink
                  onClick={handleLogout}
                  className={"btn navBar-button btn-secondary"}
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <NavLink
                to="/auth/login"
                className={
                  location.pathname === "/auth/login"
                    ? "navBar-client-active"
                    : "navBar-client"
                }
              >
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
