import React from "react";
import { NavLink } from "react-router-dom";

import { useAuth } from "context/auth";

function Navigation() {
  const { authTokens, setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens("");
  }

  return (
    <div className="Navigation">
      <ul className="Navigation__List">
        <li className="Navigation__List_El">
          <NavLink to="/">Home Page</NavLink>
        </li>
        {authTokens && (
          <>
            <li className="Navigation__List_El">
              <NavLink to="/admin">Admin Page</NavLink>
            </li>
            <li className="Navigation__List_El">
              <NavLink to="/reports">Reports</NavLink>
            </li>
            <li className="Navigation__List_El">
              <NavLink to="/secrets">Secrets</NavLink>
            </li>
          </>
        )}
        {!authTokens && (
          <li className="Navigation__List_El">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
      <ul className="Navigation__Tools">
        {authTokens && (
          <li className="Navigation__Tools_El">
            <button onClick={() => logOut()}>Log Out</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
