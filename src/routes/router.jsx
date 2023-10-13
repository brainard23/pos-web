import React, { Children } from "react";

// depedencies
import loadable from "@loadable/component";
import { createBrowserRouter } from "react-router-dom";

//component
import Layout from "../pages/Layout/Layout";

// Dashboard
const MainDashboard = loadable(() => import('../pages/MainDashboard/MainDashboard'));
const Purchase = loadable(() => import("../pages/Purchase/Purchase"));
const Products = loadable(() => import("../pages/Products/Products"));

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <MainDashboard />,
        path: "/dashboard",
      },
      {
        element: <Purchase />,
        path: "/purchase",
      },
      {
        element: <Products />,
        path: "/inventory",
      },
    ],
  },
]);
export default router;
