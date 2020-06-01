import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { login } from "services";

import Page from "components/Page";

import { useAuth } from "context/auth";
import logoImg from "assets/img/logo.svg";

function Login({ location }) {
  const [isError, setIsError] = useState(false);
  const [username, setusername] = useState("chepe");
  const [password, setPassword] = useState("caracola_mágica@12345");
  const { authTokens, setAuthTokens } = useAuth();
  const referer = location?.state?.referer || "/admin";

  function postLogin() {
    // This should be an API Call with success
    if (login({ username, password })) {
      setAuthTokens("fake-token");
    } else {
      setIsError(true);
    }
  }

  return (
    <Page>
      {authTokens && <Redirect to={referer} />}
      <div className="Card">
        <img src={logoImg} className="Logo" alt="Logo" />
        <form className="Form">
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
          <button className="Button" onClick={postLogin}>
            Sign In
          </button>
        </form>
        <Link to="/signup">Don't have an account?</Link>
        {isError && <p>The username or password provided were incorrect!</p>}
      </div>
    </Page>
  );
}

export default Login;
