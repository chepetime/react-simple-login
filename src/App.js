import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "Routes";

import Navigation from "components/Navigation/";

import AuthContextProvider from "providers/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="AppLoading"></div>}>
          <div className="App">
            <div className="Canvas">
              <Navigation />
              <Switch>
                <Routes />
              </Switch>
            </div>
          </div>
        </Suspense>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
