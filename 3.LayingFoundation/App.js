import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))

const Container = ()=>{
    return (
        <div className="container">
            <h1>This is container</h1>
        </div>
    )
}
const App = ()=>{
    return (
        <>
        <h1>this is App😂🚀</h1>
        <h2>{console.log("hello")}</h2>
        <Container>
            <h1>hello</h1>
        </Container>
        </>
    )
}


root.render(<App/>)