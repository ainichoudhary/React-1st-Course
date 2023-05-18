// import React from "react"
// import ReactDOM from "react-dom"

function Navbar(){
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
    <span className="navbar-text">
      Navbar text with an inline element
    </span>
            </div>
        </nav>
    )
}

function Content() {
    return (
        <h1>I learn react </h1>
    )
}
ReactDOM.render(
    <div>
        <Navbar />
        <Content/>

    </div>,
    document.getElementById("action")
)



ReactDOM.render(<h1>hello react</h1>, document.getElementById("root"))
ReactDOM.render(<p>why we use react </p>, document.getElementById("root_id"))
ReactDOM.render(<ul>
                        <li>oil</li>
                        <li>sugar</li>
                        <li>cheese</li>
                        <li>tea</li>
                </ul>, document.getElementById("make_ordered list"))

let h1=document.createElement("h1")
h1.textContent="this is my page"
h1.className="heading"
document.getElementById("append_element").append(h1)