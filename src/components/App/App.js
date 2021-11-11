import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import Fotter from "../Fotter/Fotter";
import BottomPost from "../BottomPost/BottomPost";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <BottomPost />
        <Fotter />
      </Router>
    </>
  );
}
