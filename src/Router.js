import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import routes from './data/routes'

const Router = () => (
  <BrowserRouter>
    <Switch>
        {routes.map((route, i) => (
            <Route key={i} {...route} />
        ))}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;