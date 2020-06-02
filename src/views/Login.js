import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken, login } from "features/auth/authSlice";

import Page from "components/Page";

import logoImg from "assets/img/logo.svg";

function Login({ location }) {
  const dispatch = useDispatch();
  const [username, setusername] = useState("chepe");
  const [password, setPassword] = useState("caracola_mágica@12345");

  const { authToken, loading, hasErrors } = useSelector(getAuthToken);

  const referer = location?.state?.referer || "/admin";

  function postLogin() {
    if (loading) return false;
    dispatch(login({ username, password }));
  }

  function hadleSubmit(e) {
    e.preventDefault();
    postLogin();
  }

  if (authToken) {
    return <Redirect to={referer} />;
  }

  return (
    <Page>
      <div className="Card">
        <img src={logoImg} className="Logo" alt="Logo" />
        <form className="Form" onSubmit={(e) => hadleSubmit(e)}>
          <input
            type="username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button type="submit" className="Button">
            {loading ? "Loading…" : "Sign In"}
          </button>
        </form>
        {hasErrors && <p>The username or password provided were incorrect!</p>}
      </div>
    </Page>
  );
}

export default Login;
