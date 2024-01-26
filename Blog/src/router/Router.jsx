import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { adminAuth, userAuth } from "../middleware/checkAuth";
import AdminRouter from "./AdminRouter";
import PublicRoute from "./PublicRoute";
import UserRouter from "./UserRouter";
import { store } from "../appredux/store";
import { useSelector } from "react-redux";
import { selectUser } from "../appredux/userSlice";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import BlogList from "../pages/admin/BlogList";
import UserList from "../pages/admin/UserList";
import Management from "../pages/admin/Management";
import Category from "../pages/admin/Category";
import BlockList from "../pages/admin/BlockList";
import ProfileCard from "../components/ProfileCard";
import NotFound from "../pages/NotFound";
import BlogDetail from "../pages/blog/BlogDetail";
import Profile from "../pages/user/Profile";
import Components from "../layouts/Components";
import Article from "../pages/Article";
import Blog from "../pages/Blog";
import SignUpForm from "../components/form/SignInForm";
import LoginForm from "../components/form/LoginForm";
import Auth from "../pages/Auth";
import RouteProtector from "../middleware/RouteProtector";

function Router() {
  const user = useSelector(selectUser);

  const router = createBrowserRouter([
    AdminRouter(),
     UserRouter(),
    ...PublicRoute(),
  ]);
  // const router = createBrowserRouter([
  //   {
  //     path: "/auth",
  //     element: <Auth />,
  //     children: [
  //       {
  //         path: "/auth/login",
  //         element: <LoginForm />,
  //       },
  //       {
  //         path: "/auth/signup",
  //         element: <SignUpForm />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/",
  //     element: <Components />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Blog />,
  //       },
  //       {
  //         path: "/article",
  //         element: <Article />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/user",
  //     element: <Components />,
  //     children: [
  //       {
  //         path: "/user/profile",
  //         element: <Profile user={user} />,
  //       },
  //       {
  //         path: "/user/blog/:blogId",
  //         element: <BlogDetail />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/admin",

  //     element: <AdminLayout />,
  //     children: [
  //       {
  //         path: "/admin/dashboard",
  //         element: (
  //           <RouteProtector role="admin">
  //             <Dashboard />
  //           </RouteProtector>
  //         ),
  //       },
  //       {
  //         path: "/admin/blog-list",
  //         element: <BlogList />,
  //       },
  //       {
  //         path: "/admin/user-list",
  //         element: <UserList />,
  //       },
  //       {
  //         path: "/admin/management",
  //         element: <Management />,
  //       },
  //       {
  //         path: "/admin/category",
  //         element: <Category />,
  //       },
  //       {
  //         path: "/admin/block-list",
  //         element: <BlockList />,
  //       },
  //       {
  //         path: "/admin/profile",
  //         element: <ProfileCard user={user} />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);

  return <RouterProvider router={router} />;
}

export default Router;
