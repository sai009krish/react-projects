import React from 'react' ;
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Menu from './Menu';
import Contact from './Contact'
import Footer from './Footer'
import ChefList from './ChefList';
import StoreList from './StoreList';


function App() {
    return (
        <div className="App">
           <Header/> 
           <Banner/>
           <About/>
           <Menu/>
           <ChefList/>
           <Contact/>
           <StoreList/>
           <Footer/>
        </div>
    )
}

export default App;
