import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import OrderManagement from "../pages/OrderManagement";
import Users from "../pages/Users";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "customer",
        element: <Customers />,
      },
      {
        path: "order-management",
        element: <OrderManagement />,
      },
      {
        path: "user",
        element: <Users />,
      },
    ],
  },
]);
