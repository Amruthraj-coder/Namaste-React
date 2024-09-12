import React from "react"
import ReactDOM from "react-dom/client"
import Header from "../src/Components/Header.js";
import Body from "../src/Components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Button, Result } from "antd";
import About from "./Components/About.js"
import Home from "./Components/Home.js"
import Contact from "./Components/Contact.js"
import RestaurantMenu from "./Components/RestaurantMenu.js";

const root = ReactDOM.createRoot(document.getElementById("root"));


const App = ()=>{
    return (
        <div className="app-container">
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
           
            {
                path : "/",
                element : <Body/>

            },
            {
                path : "/contact",
                element : <Contact/>

            },
            {
                path : "/about",
                element : <About/>

            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            }
        ]
    },

    {
        path:"*",
        element : <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
    }
])

root.render(<RouterProvider router={appRouter}/>)