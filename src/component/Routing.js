import React from 'react'
import ReactDOM from 'react-dom'
import Recipe from "./RecipeGuide"
import Form from "./Form"
import App from "../App"
import Home from "./Home"
import { Route, BrowserRouter as Router } from 'react-router-dom'


function Routing() {
    return(
        <Router>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route path="/Recipe" component={Recipe}/>
                <Route path="/Form" component={Form} />
                <Route path="App" component={App} />
            </div>
        </Router>
    )
}

// <Route path="/" component={App} />
      // <Route path="/users" component={Users} />
      // <Route path="/contact" component={Contact} />




// ReactDOM.render(<App />, document.getElementById('root'))

export default Routing;