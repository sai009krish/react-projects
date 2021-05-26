import React from 'react'
import About from './About'
import Contact from './Contact'
import Features from './Features'
import Home from './Home'
import Navbar from './Navbar'
import Products from './Prodcuts'
import {Route,Switch } from 'react-router-dom';
import Hooks from './Hooks'
import Hookcount from './Hookcount'

function App() {
    return (
        <div className="App">
            <Hooks/>
             <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route path="/Products" component={Products}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Features" component={Features}/>
            </Switch>
            <Navbar/>
            <Hookcount/>
            
        </div>
    )
}

export default App ;
