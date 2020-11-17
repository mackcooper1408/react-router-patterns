import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ColorDetails from "./ColorDetails";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";

function Routes({ colors, addColor }) {
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
      <Route exact path="/colors/new">
        <ColorForm addColor={addColor} />
      </Route>
      <Route exact path="/colors/:name">
        <ColorDetails colors={colors} />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  )
}

export default Routes;