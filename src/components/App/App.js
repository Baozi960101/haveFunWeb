import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import Fotter from "../Fotter";
import Boutiques from "../../pages/Boutiques";
import Vehicles from "../../pages/Vehicles/Vehicles";
import WorldNews from "../../pages/WorldNews/WorldNews";
import FinancialNews from "../../pages/FinancialNews/FinancialNews";
import SingleArticle from "../../pages/SingleArticle";
import { SlugContext } from "../../global/context";

export default function App() {
  const [aloneSlug, setAloneSlug] = useState("");

  function BlogSinglePost() {
    let { slug } = useParams();
    let location = useParams();
    useEffect(() => {
      setAloneSlug(slug);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
    return <SingleArticle />;
  }

  return (
    <>
      <SlugContext.Provider value={{ aloneSlug, setAloneSlug }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/boutiques">
              <Boutiques />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles />
            </Route>
            <Route exact path="/worldnews">
              <WorldNews />
            </Route>
            <Route exact path="/financialnews">
              <FinancialNews />
            </Route>
            <Route path="/:slug">
              <BlogSinglePost />
            </Route>
          </Switch>
          <Fotter />
        </Router>
      </SlugContext.Provider>
    </>
  );
}
