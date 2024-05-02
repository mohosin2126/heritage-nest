import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import BuyerScreens from "../BuyerScreens/BuyerScreens";
import SearchResult from "../BuyerSearchResult/SearchResult";
import About from "../AboutUs/About";
import Details from "../PropertyDetails.jsx/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/buyerscreens",
        element: <BuyerScreens></BuyerScreens>,
      },
      {
        path: "/searchresult",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "/details",
        element: <Details></Details>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);