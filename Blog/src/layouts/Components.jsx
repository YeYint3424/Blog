import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Suspense } from "react";

const Components = () => {
  return (
    <div className="bg-back">
      <NavBar />
      <div className="pt-4rem" style={{ backgroundColor: "#efefef" }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Components;
