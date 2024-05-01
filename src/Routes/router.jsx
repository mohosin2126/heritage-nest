import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import BuyerScreens from "../BuyerScreens/BuyerScreens";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/buyerscreens",
          element:<BuyerScreens></BuyerScreens>
        }
      ]
    },
  ]);