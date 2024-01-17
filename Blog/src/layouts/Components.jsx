import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Components = () => {
  return (
    <div>
      <NavBar />
      <div className="mt-4rem">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Components;
