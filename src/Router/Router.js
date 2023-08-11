import React from "react";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LogOut from "../components/LogOut";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/logout",
          element: <LogOut></LogOut>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>
    </div>
  );
}
