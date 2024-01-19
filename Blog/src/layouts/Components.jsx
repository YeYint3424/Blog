import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Components = () => {
  return (
    <div className="bg-back">
      <NavBar />
      <div className="pt-4rem" style={{backgroundColor: '#efefef'}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Components;
