import React, {useState} from "react";

import {
    Switch,
    Route,
    BrowserRouter as Router
} from "react-router-dom";
import MainPage from "./pages/mainPage";
import SecretPage from "./pages/secretPage";

const Routing = () => {
    const [isLogined , setLogin] = useState(false);
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <MainPage setLogin={setLogin}/>}/>
                <Route path="/secret" render={() => <SecretPage isLogined={isLogined}/>}/>
            </Switch>
        </Router>
    )
}

export default Routing;
