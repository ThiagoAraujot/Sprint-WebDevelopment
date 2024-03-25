import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyled from "./GlobalStyled.jsx";
import Error from "./routes/Error/Error.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>
);
