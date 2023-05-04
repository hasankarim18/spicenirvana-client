import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import UserProfile from "../Pages/User/UserProfile";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import ChefPage from "../Pages/ChefPage/ChefPage";
import RecipeDetails from "../Components/RecipeDetails/RecipeDetails";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
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
      {
        path: "/recipes/:chef_id",
        element: (
          <PrivateRoute>
            {" "}
            <ChefPage />{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("https://spicenirvana.vercel.app/recipes/c001"),
      },
      {
        path: "/recipe/:id",
        element: (
          <PrivateRoute>            
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export {router}