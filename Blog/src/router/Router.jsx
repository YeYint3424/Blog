import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Components from "../layouts/Components";
import Blog from "../pages/Blog";
import Article from "../pages/Article";
import NotFound from "../pages/NotFound";
import Auth from "../pages/Auth";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import BlogList from "../pages/admin/BlogList";
import UserList from "../pages/admin/UserList";
import Management from "../pages/admin/Management";
import Category from "../pages/admin/Category";
import BlockList from "../pages/admin/BlockList";
import Profile from "../pages/user/Profile";
import BlogDetail from "../pages/blog/BlogDetail";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Components />,
      children: [
        {
          path: "/",
          element: <Blog />,
        },
        {
          path: "/article",
          element: <Article />,
        },
      ],
    },
    
    {
      path: "/user/profile",
      element: <Profile />,
    },
    {
      path: "/blog/:blogId",
      element: <BlogDetail />,
    },
    {
      path: "/signin",
      element: <Auth type={"login"} />,
    },
    {
      path: "/signup",
      element: <Auth type={"signUp"} />,
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { 
          path: "/admin/dashboard", 
          element: <Dashboard /> 
        },
        {
          path: "/admin/blog-list",
          element: <BlogList /> 
        },
        {
          path: "/admin/user-list",
          element: <UserList /> 
        },
        {
          path: "/admin/management",
          element: <Management /> 
        },
        {
          path: "/admin/category",
          element: <Category /> 
        },
        {
          path: "/admin/block-list",
          element: <BlockList /> 
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
