import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import PrivetRouter from "./PrivetRouter";
import Dashboard from "../layout/Dashboard";
import DashHome from "../pages/Dashboard/DashHome/DashHome";
import MyDonationRequests from "../pages/Dashboard/MyDonationRequests/MyDonationRequests";
import CreateDonationRequest from "../pages/Dashboard/CreateDonationRequest/CreateDonationRequest";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/blog",
          element: <PrivetRouter><Blog></Blog></PrivetRouter>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element: <DashHome></DashHome>
        },
        {
        path: '/dashboard/my-donation-requests',
        element: <MyDonationRequests></MyDonationRequests>
        },
        {
        path: '/dashboard/create-donation-request',
        element: <CreateDonationRequest></CreateDonationRequest>
        }
      ]
    }
  ]);



export default router;