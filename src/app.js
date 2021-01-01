import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages/";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home></Home>
      </Route>
      <Route exact path={ROUTES.SIGN_UP}>
        <Signup></Signup>
      </Route>
      <Route exact path={ROUTES.SIGN_IN}>
        <Signin></Signin>
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <Browse></Browse>
      </Route>
    </Router>
  );
}

export default App;
