import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import UserProfile from "../Pages/User/UserProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/blog',
                element:<Blog />
            },
            {
                path:"/user-profile",
                element:<UserProfile />
            }
        ]

    }
])

export {router}