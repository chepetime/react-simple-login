import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import { getAuthToken } from "features/auth/authSlice";

function PrivateRoute({ component: Component, ...rest }) {
  const { authToken } = useSelector(getAuthToken);

  return (
    <Route
      {...rest}
      render={(props) =>
        authToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { referrer: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
