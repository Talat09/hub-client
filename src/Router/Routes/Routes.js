import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../components/Home/Home";
import Blogs from "../../components/Blogs/Blogs";
import Reviews from "../../components/Reviews/Reviews";
import Purchases from "../../components/Purchases/Purchases";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Login/SignUp";
import BestSeller from "../../components/BestSeller/BestSeller";
import TopRated from "../../components/TopRated/TopRated";
import Dashboard from "../../components/Dashboard/Dashboard";
import AddReview from "../../components/Dashboard/AddReview/AddReview";
import MyOrders from "../../components/Dashboard/Orders/MyOrders";
import MyProfile from "../../components/Dashboard/MyProfile/MyProfile";
import UpdateProfile from "../../components/Dashboard/MyProfile/UpdateProfile";
import AllUsers from "../../components/Dashboard/AllUsers/AllUsers";
import AddProduct from "../../components/Dashboard/AddProduct/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <BestSeller />,
          },
          {
            path: "/top-rated",
            element: <TopRated />,
          },
        ],
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/purchase/:id",
        element: <Purchases />,
      },
      {
        path: "/review",
        element: <Reviews></Reviews>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/add-review",
            element: <AddReview />,
          },
          {
            path: "/dashboard/my-orders",
            element: <MyOrders />,
          },
          {
            path: "/dashboard",
            element: <MyProfile />,
          },
          {
            path: "user/update-profile",
            element: <UpdateProfile />,
          },
          {
            path: "all-users",
            element: <AllUsers />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
        ],
      },
    ],
  },
]);
