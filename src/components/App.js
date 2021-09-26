import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import TreesPage from "./TreesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageTreePage from "./ManageTreePage";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/trees" component={TreesPage} />
                <Route path="/tree/:slug" component={ManageTreePage} />
                <Route path="/tree/" component={ManageTreePage} />
                <Route path="/about" component={AboutPage} />
                <Redirect from="/about-page" to="about" />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    );
}

export default App;