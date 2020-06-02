import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { login } from "services";

import Page from "components/Page";

import { useAuth } from "context/auth";
import logoImg from "assets/img/logo.svg";

function Login({ location }) {
  const [isError, setIsError] = useState(false);
  const [username, setusername] = useState("chepe");
  const [password, setPassword] = useState("caracola_mágica@12345");
  const [loading, setloading] = useState(false);
  const { authTokens, setAuthTokens } = useAuth();

  const referer = location?.state?.referer || "/admin";

  function postLogin() {
    if (loading) {
      return false;
    }

    setloading(true);

    setTimeout(() => {
      // This should be an API Call with success
      if (login({ username, password })) {
        setloading(false);
        setAuthTokens("fake-token");
      } else {
        setloading(false);
        setIsError(true);
      }
    }, 3000);
  }

  function hadleSubmit(e) {
    e.preventDefault();
    postLogin();
  }

  if (authTokens) {
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
        {isError && <p>The username or password provided were incorrect!</p>}
      </div>
    </Page>
  );
}

export default Login;
