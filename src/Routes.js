import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "PrivateRoute";

import { useAuth } from "context/auth";

import Home from "views/Home";
import Admin from "views/Admin";
import Login from "views/Login";

import Reports from "views/Reports";
import Secrets from "views/Secrets";

const NoMatchPage = () => {
  return <Redirect to="/login" />;
};

function Routes() {
  const { authTokens } = useAuth();

  useEffect(() => {
    const minutes = 5; // Probably should go on an .env param
    const time = minutes * 60 * 1000;
    const interval = setInterval(() => {
      // Check if the token is valid every x time
      if (authTokens) {
        console.log("Check if token is valid");
      }
    }, time);
    return () => clearInterval(interval);
  }, [authTokens]);

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
