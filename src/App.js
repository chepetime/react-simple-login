import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Routes from "Routes";

import Navigation from "components/Navigation/";

function App() {
  return (
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
  );
}

export default App;
