import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import UserProfile from "../Pages/User/UserProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            {" "}
            <UserProfile />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export {router}