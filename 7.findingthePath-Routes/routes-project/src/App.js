import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"; // Corrected import
import Header from "../src/Components/Header.js";
import Body from "../src/Components/Body.js";
import { Button, Result } from "antd";
import About from "../src/Components/About.js";
import Home from "../src/Components/Home.js";
import Contact from "../src/Components/Contact.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 'element' is correctly lowercase
    children: [
      {
        path: "/", // Route to Body component
        element: <Body />,
      },
      {
        path : "/home",
        element:<Home/>
      },
      {
        path : "/aboutus",
        element:<About/>
      },
      {
        path : "/contact",
        element:<Contact/>
      }
    ]
   
  },
  {
    path:"*",
    element : <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
  }
]);

root.render(
  <RouterProvider router={appRouter} />
);
