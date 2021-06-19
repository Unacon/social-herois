import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PATHS } from "../config/paths";
import Feed from "./pages/Feed";
import Login from "./pages/Login";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={PATHS.ROOT}>
          <h1>Root</h1>
        </Route>

        <Route path={PATHS.LOGIN}>
          <Login />
        </Route>

        <Route path={PATHS.FEED}>
          <Feed />
        </Route>

        <Route exact={true} path={PATHS.TEST}>
          <h1>Teste</h1>
        </Route>

        <Route>
          <h1>Página não Encontrada</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
