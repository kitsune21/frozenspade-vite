import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.tsx";
import Home from "./routes/home.tsx";
import WrPb from "./routes/wrpb.tsx";
import YouTube from "./routes/youtube.tsx";
import Social from "./routes/social.tsx";
import ErrorPage from "./error-page.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wrpb",
        element: <WrPb />,
      },
      {
        path: "/youtube",
        element: <YouTube />,
      },
      {
        path: "/social",
        element: <Social />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
