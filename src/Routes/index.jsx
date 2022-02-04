import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "../components/Header/Header";

import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={MovieDetails} path="/detalhes/:id" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;