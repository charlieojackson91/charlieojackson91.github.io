import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Header />

      <Router>
        <Route path='/' exact>
          <Slides />
          <TimeTable />
          <Info />
          <Contact />
        </Route>
        <Route path='/pizzas'>
          <Menu />
        </Route>
        <Route path='/about us'>
          <AboutUs />
        </Route>
        <Route path='/order'>
          <Order />
        </Route>
          
      <Router />

      <Footer />

    </div>
  );
}

export default App;
