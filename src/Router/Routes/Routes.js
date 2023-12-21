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
    ],
  },
]);
