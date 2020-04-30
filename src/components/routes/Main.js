import React from "react";
import { Switch, Route } from "react-router-dom";

import CameraHandler from "../cameraHandler";
import ProductDisplay from "../productDisplay";
import ProductNotFound from "../productNotFound";
import { HistoryDisplay } from "../history";
import { Welcome } from "../welcome";

const Main = () => (
  <main className="main__wrapper">
    <Switch>
      <Route exact path="/welcome" component={Welcome} />
      <Route exact path="/camera" component={CameraHandler} />
      <Route exact path="/product/not-found" component={ProductNotFound} />
      <Route exact path="/product/:id" component={ProductDisplay} />
      <Route exact path="/history" component={HistoryDisplay} />
    </Switch>
  </main>
);

export default Main;
