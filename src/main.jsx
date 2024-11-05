import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Root from "./Component/Root/Root.jsx";
import Home from "./Component/Home/Home.jsx";
import DashBoard from "./Component/DashBoard/DashBoard.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import Details from "./Component/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "book/:bookId",
        element: <Details></Details>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
