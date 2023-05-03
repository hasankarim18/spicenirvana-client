import React from 'react'
import ReactDOM from 'react-dom/client'
import "@smastrom/react-rating/style.css";
import "react-toastify/dist/ReactToastify.css";
import './index.css'
import {RouterProvider} from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from "react-toastify";
import DataLoadProvider from './Provider/DataLoadProvider';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataLoadProvider>
      <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
    </DataLoadProvider>
  </React.StrictMode>
);
