import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import State from './State'
import StoreList from './StoreList'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Page from './NotFound'

function App() {
  return (
    // <div className="App">

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {/* <StoreList/>   */}
      {/* <State/> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="" component={Page} />
      </Switch>
    </div>
  );
}

export default App
