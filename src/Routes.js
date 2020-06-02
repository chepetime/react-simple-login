import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthToken } from "features/auth/authSlice";

import PrivateRoute from "PrivateRoute";

import Home from "views/Home";
import Admin from "views/Admin";
import Login from "views/Login";

import Reports from "views/Reports";
import Secrets from "views/Secrets";

function Routes() {
  const { authToken } = useSelector(getAuthToken);

  useEffect(() => {
    const minutes = 5; // Probably should go on an .env param
    const time = minutes * 60 * 1000;
    const interval = setInterval(() => {
      // Check if the token is valid every x time
      if (authToken) {
        console.log("Check if token is valid");
      }
    }, time);
    return () => clearInterval(interval);
  }, [authToken]);

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/admin" component={Admin} />
      <PrivateRoute path="/reports" component={Reports} />
      <PrivateRoute path="/secrets" component={Secrets} />
    </>
  );
}

export default Routes;
