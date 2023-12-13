import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import NavBar from "./layouts/NavBar";
import Blog from "./pages/Blog";
import Footer from "./layouts/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Article from "./pages/Article";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/article",
    element: <Article />,
  },
]);
function App() {
  return (
    <div>
      <NavBar />
      <div className="mt-4rem">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
