import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Home from './pages/home/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
const customRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <h1>Ocurrio un error</h1>,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <h1>Ocurrio un error</h1>,
  },
  {
    path: '/register',
    element: <Register/>,
    errorElement: <h1>Ocurrio un error</h1>,
  },
  {
    path: '/home',
    element: <Home/>,
    errorElement: <h1>Ocurrio un error</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={customRouter} />
  </React.StrictMode>
);