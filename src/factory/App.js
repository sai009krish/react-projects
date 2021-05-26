import Header from './Header'
import Home from './Home';
import About from './About'
import Services from './Services'
import Frequently from './Frequently'



function App() {
  
    return (
        <div className="app">
           <Header/>
           <Home/>
           <About/>
           <Services/>
           <Frequently/>
           
           {/*   <Switch>
            <Route exact path="/" component={Home}/>    
            <Route exact path="/about" component={About} />
            <Route exact path="/sevices" component={Services} />
            <Route exact path="/frequently" component={Frequently} />
            <Route exact path="/Dropdown" component={Dropdown} />
            <Route exact path="/contact" component={Contact} />
           </Switch>  */} 
        </div>
    )
}

export default App



    

    

    
   

