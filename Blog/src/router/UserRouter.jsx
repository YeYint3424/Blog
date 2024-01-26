import React, { useEffect } from "react";
import Components from "../layouts/Components";
import Profile from "../pages/user/Profile";
import BlogDetail from "../pages/blog/BlogDetail";
import { selectUser } from "../appredux/userSlice";
import { useSelector } from "react-redux";
import UserLayout from "../layouts/UserLayout";
import CreateBlog from "../components/form/CreateBlog";
export default function UserRouter() {
  return {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        path: "/user/profile",
        element: <Profile/>,
      },
      {
        path: "/user/blog/:blogId",
        element: <BlogDetail />,
      },
      {
        path: "/user/create-blog",
        element: <CreateBlog />,
      },
    ],
  };
}
