import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FilmsCard from "./Components/Films/FilmsCard";
// import FavoriteTemplate from "./Components/FavoriteTemplate/FavoriteTemplate";
import Details from "./Components/Details/Details";
// import FilmsTemplate from "./Components/FilmsTemplate/FilmsTemplate";

function App() {
    return (
        <Router>
            <Switch>
                    <Route exact path="/" component={FilmsCard}/>
                    <Route path="/details/:id" component={Details}/>
                    {/*<Route path="/favorite" component={FavoriteTemplate}/>*/}
                    <Route path="*" component={FilmsCard}/>
            </Switch>
        </Router>
    );
};
export default App;