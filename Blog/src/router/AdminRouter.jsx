import React, { lazy } from 'react'
import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../pages/admin/Dashboard'
import BlogList from '../pages/admin/BlogList'
import UserList from '../pages/admin/UserList'
import Management from '../pages/admin/Management'
import Category from '../pages/admin/Category'
import BlockList from '../pages/admin/BlockList'
import Profile from '../pages/user/Profile'
import ProfileCard from '../components/ProfileCard'
import { useSelector } from 'react-redux'
import { selectUser } from '../appredux/userSlice'
// const Dashboard =lazy(()=> import('../pages/admin/Dashboard'))
// const BlogList =lazy(()=> import('../pages/admin/BlogList'))
// const UserList =lazy(()=> import('../pages/admin/UserList'))
// const Management =lazy(()=> import('../pages/admin/Management'))
// const Category =lazy(()=> import('../pages/admin/Category'))
// const BlockList =lazy(()=> import('../pages/admin/BlockList'))

export default function AdminRouter() {

  return {
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
          {
            path: "/admin/profile",
            element: <ProfileCard />,
          },
        ],
      }
  
}
