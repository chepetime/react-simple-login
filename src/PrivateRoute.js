import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  if (!authTokens) {
    return <Redirect to={{ pathname: "/login" }} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => authTokens && <Component {...props} />}
    />
  );
}

export default PrivateRoute;
