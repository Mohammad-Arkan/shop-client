import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/HomePage/Home/Home";
import AddProduct from "../Page/HomePage/AddProduct/AddProduct";
import MainLayout from "../MainLayout/MainLayout";
import ShopPage from "../Page/HomePage/ShopPage/ShopPage";

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
            path:'/shop',
            element:<ShopPage></ShopPage>,
            loader:()=> fetch('http://localhost:5000/shop')
        },
        {
            path:"/add",
            element:<AddProduct></AddProduct>
        },
      ],
    },
  ]);
export default router