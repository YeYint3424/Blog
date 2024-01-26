import React from 'react'
import Components from '../layouts/Components'
import Blog from '../pages/Blog'
import Article from '../pages/Article'
import NotFound from '../pages/NotFound'
import LoginForm from '../components/form/LoginForm'
import SignUpForm from '../components/form/SignInForm'
import Auth from '../pages/Auth'

export default function PublicRoute() {
  return [
    {
        path: "/auth",
        element: <Auth />,
        children:[
          {
            path: "/auth/login",
            element: <LoginForm />,
          },
          {
            path: "/auth/signup",
            element: <SignUpForm />,
          }
        ]
      },
      {
        path: "/",
        element: <Components />,
        children: [
          {
            path: "/",
            element: <Blog />,
          },
          {
            path: "/article/:blogId",
            element: <Article />,
          },
        ],
      },
      
      {
        path: "*",
        element: <NotFound />,
      },
  ]
}
