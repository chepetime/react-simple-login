import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "PrivateRoute";

import Home from "views/Home";
import Admin from "views/Admin";
import Login from "views/Login";

import Reports from "views/Reports";
import Secrets from "views/Secrets";

const NoMatchPage = () => {
  return <Redirect to="/login" />;
};

function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/reports" component={Reports} />
      <PrivateRoute path="/secrets" component={Secrets} />
      <Route component={NoMatchPage} />
    </>
  );
}

export default Routes;
