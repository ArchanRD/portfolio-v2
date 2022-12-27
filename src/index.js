import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Myskills from "./Pages/Myskills/Myskills";
import About from "./Pages/About/About";
import Archives from "./Pages/Archivess/Archives";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/myskills",
    element: <Myskills />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/archive",
    element: <Archives/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
