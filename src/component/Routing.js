import React from 'react'

import Recipe from "./RecipeGuide"
// import App from "../App"
import Home from "./Home"
// import Display from "./Display"
import { Route, BrowserRouter as Router } from 'react-router-dom'


function Routing() {
    return(
        <Router>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route path="/Recipe" component={Recipe}/>
            </div>
        </Router>
    )
}

export default Routing;