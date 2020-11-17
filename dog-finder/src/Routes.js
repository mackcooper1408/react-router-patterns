import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useParams } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from './DogList';

function Routes({ dogs }) {
  // const [singleDog, setSingleDog] = useState({});
  // const { name } = useParams();

  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs}/>
      </Route>
      <Route path="/dogs/:name">
        <DogDetails dogs={dogs}/>
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  )
}

export default Routes;