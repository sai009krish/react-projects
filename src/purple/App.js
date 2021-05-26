import React from "react";
import Header from "./Header";
import Home from './Home'
import Services from "./Services";
import Team from "./Team";
import About from "./About";
import Work from "./Work";
import Pricing from "./Pricing";
import Contact from "./Contact";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      {/* <Services/> 
      <Team/>*/}

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Work" component={Work} />
        <Route exact path="/Pricing" component={Pricing} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
