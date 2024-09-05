import React from "react"
import ReactDOM from "react-dom/client"
import Header from "../src/Components/Header.js";
import Body from "../src/Components/Body.js";

const root = ReactDOM.createRoot(document.getElementById("root"));


const App = ()=>{
    return (
        <div className="app-container">
            <Header/>
            <Body/>
        </div>
    )
}

root.render(<App/>)