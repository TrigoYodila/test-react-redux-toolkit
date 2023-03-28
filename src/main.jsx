import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import "./main.css"
import Authors from "./pages/Authors";
import Books from "./pages/Books";
import { Provider } from "react-redux";
import {store} from './app/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/authors",
        element:<Authors />
      },
      {
        path:"/books",
        element:<Books />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
