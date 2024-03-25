import React from "react"
import ReactDOM from "react-dom"
// import components
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import Lightmode from './components/Lightmode.js'
// render to page
function Page() {
    return (
        <div className='container'>
            <Lightmode />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))