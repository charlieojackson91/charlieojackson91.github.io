// module imports
import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Vans from './components/Vans';
import Pizzeria from './components/Pizzeria';
import Content from './components/Content';
import Gallery from './components/Gallery';
import Menu from './components/Menu';



// application
function App() {
  
  return (
    <div>
      <Router>
        <Header/>
        
        {/* --------------------------------------------- HOMEPAGE --------------------------------------------------------------------- */}
        <Route path='/' exact>
          <Banner 
            img='http://thedoughshack.co.uk/wp-content/uploads/2018/10/20180311-THE_DOUGH_SHACK_001.jpg'
            alt='pizza at dinner table'
            text="We're The Dough Shack - Traditional wood fired piza from our vans and pop-up pizzeria."
          />
          <div className='van-pizzeria-divide'>
            <Vans/>
            <Pizzeria/>
          </div>
          <Banner 
            img='http://thedoughshack.co.uk/wp-content/uploads/2017/05/Aaron-and-oven-resized.jpg'
            alt='stocking the pizza oven fire'
            logo={false}
          />
        </Route>



        {/* ---------------------------------------------- PIZZA MENU ------------------------------------------------------------------ */}
        <Route path='/pizza' exact>
          <Banner 
            img='http://thedoughshack.co.uk/wp-content/uploads/2017/05/Pizza-header-resized.jpg'
            alt='close up of nduja pizza'
          />
          <Content
          title='Pizzas'
          text='The menu takes influence both from old age recipes and millennial eating habits. London can now enjoy pizza made in the finest traditions with added quirks for a new era of taste buds.

          The base ingredients come directly from Italy and the fresh veg, meat and cheese are sourced from local butchers and farmer’s markets.
          
          The secret’s in the dough; you won’t want to throw away the crusts. This is where carnivores and veggies unite in the name of decent pizza.'/>
          
          <Menu />
          
        </Route>


        {/* ---------------------------------------------- ABOUT US --------------------------------------------------------------------- */}
        <Route path='/about-us' exact>
          <Banner 
            img='http://thedoughshack.co.uk/wp-content/uploads/2016/06/About-header-resized.jpg'
            alt='the dough shack logo'
          />
          <Content
          title='About Us'
          text='The Dough Shack journey began in the kitchens of pizza houses around southwest London and Brighton where Aaron would use his spare time to fuse together signature ingredients with alternative toppings.

          Conor’s business nous and reluctance to sit behind a desk took himself and Aaron out of the kitchen and around the world in order to sample the delights that pizza has to offer.
          
          After returning home, with a suitcase full of inspiration and ideas, the duo set about building their vision. Just a few months later, the iconic Dough Shack van was ready to go, converted into a state-of-the-art pizza kitchen.'/>
          <img src='http://thedoughshack.co.uk/wp-content/uploads/person-x2-e1469139976179.jpg' id='aboutUsImg' alt='the dough shack owners - Conor and Aaron'></img>
          <Gallery/>
        </Route>


        {/* ----------------------------------------------- PRE ORDER -------------------------------------------------------------------- */}
        <Route path='/order' exact>
          <Banner 
            img='http://thedoughshack.co.uk/wp-content/uploads/2016/06/About-header-resized.jpg'
            alt='the dough shack logo'
          />
          <Content
          title='Pre order a pizza'
          text="Pre order a pizza before 12pm, schedule when you want to collect it and we'll have it ready! No more calling and waiting in the queue!"/>
        </Route>


      </Router>
      <Footer/>
    </div>
    );
}

export default App;
