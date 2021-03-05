import React from "react";
import FilmsCard from "./Components/FilmsCard/FilmsCard";
import Details from "./Components/Details/Details";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={FilmsCard}/>
                <Route path="/details/:id" component={Details}/>
            </Switch>
        </Router>
    );
};
export default App;