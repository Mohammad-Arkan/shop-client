import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/HomePage/Home/Home";
import AddProduct from "../Page/HomePage/AddProduct/AddProduct";
import MainLayout from "../MainLayout/MainLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/add",
            element:<AddProduct></AddProduct>
        },
      ],
    },
  ]);
export default router