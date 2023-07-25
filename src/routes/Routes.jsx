import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from "../pages/dashboard/Dashboard";
import Articles from "../pages/articles/Articles";
import Categories from '../pages/categories/Categories';
import Faculties from '../pages/faculties/Faculties';
import Careers from '../pages/careers/Careers';
import ProtectedRoute from '../components/common/ProtectedRoute';
import AuthProvider from '../components/auth/AuthProvider';

const CustomRouters = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/articles",
            element: <Articles />,
          },
          {
            path: "/categories",
            element: <Categories />,
          },
          {
            path: "/faculties",
            element: <Faculties />,
          },
          {
            path: "/careers",
            element: <Careers />,
          },
        ],
      }
    ]);
  
  return (
    <AuthProvider>  
      <RouterProvider router={router} />
    </AuthProvider>
  );

};

export default CustomRouters;
