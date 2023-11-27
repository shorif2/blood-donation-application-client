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
import AllUser from "../pages/Dashboard/Admin/AllUser";
import ContentManagement from "../pages/Dashboard/Admin/ContentManagement";
import AddBlog from "../pages/Dashboard/Admin/AddBlog";
import AllDonationRequest from "../pages/Dashboard/Admin/AllDonationRequest";
import UpdateDonationRequest from "../pages/Dashboard/UpdateDonationRequest";
import BloodDonationDetails from "../pages/BloodDonationDetails/BloodDonationDetails";
import Search from "../pages/Search/Search";


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
        },
        {
          path: '/blood-donation-details/:id',
          element: <BloodDonationDetails></BloodDonationDetails>
        },
        {
          path: '/search',
          element: <Search></Search>
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
        },
        {
          path: '/dashboard/all-users',
          element: <AllUser></AllUser>
        },
        {
          path: '/dashboard/content-management',
          element: <ContentManagement></ContentManagement>
        },
        {
          path: '/dashboard/content-management/add-blog',
          element: <AddBlog></AddBlog>
        },
        {
          path: '/dashboard/all-blood-donation-request',
          element: <AllDonationRequest></AllDonationRequest>
        },
        {
          path: '/dashboard/update-donation-request/:id',
          element: <UpdateDonationRequest></UpdateDonationRequest>
        },
      ]
    }
  ]);



export default router;