/** @format */

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Poem from "./Poem";
export const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/:title" children={<Poem />} />
    </Switch>
  );
};
export default App;
