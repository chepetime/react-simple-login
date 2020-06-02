import React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getAuthToken, logout } from "features/auth/authSlice";

function Navigation() {
  const dispatch = useDispatch();
  const { authToken } = useSelector(getAuthToken);

  function logOut() {
    dispatch(logout());
  }

  return (
    <div className="Navigation">
      <ul className="Navigation__List">
        <li className="Navigation__List_El">
          <NavLink to="/">Home Page</NavLink>
        </li>
        {authToken && (
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
        {!authToken && (
          <li className="Navigation__List_El">
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
      <ul className="Navigation__Tools">
        {authToken && (
          <li className="Navigation__Tools_El">
            <button onClick={() => logOut()}>Log Out</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navigation;
