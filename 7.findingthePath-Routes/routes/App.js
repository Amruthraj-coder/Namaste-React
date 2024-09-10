import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Error from "./src/Components/Error.js"
// import { RouterProvider } from 'react-router'
import Home from "./src/Components/Home.js"
const App = () => {
    const appRouter = createBrowserRouter([
        {path:"/",
        element:<Home/>
        },
        {
        path : "*",
        element:<Error/>
        }
    ])``
  return (
    <div>
        navbar
        <div className="show">
          common
        </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)

