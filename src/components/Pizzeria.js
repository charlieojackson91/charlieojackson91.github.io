import React from 'react';
import Contact from './Contact';

const Pizzeria = () => {
    return (
        <div className='rightColumn'>
            <div className='pizzeria'>
                <h2>Pop-up Pizzeria</h2>
                <h3>Collect or Eat-in @ ByTheHorns Brewery 25 Summerstown, Wimbledon, SW17 0BQ</h3>
                <p>THESE ARE TEMPORARY CHANGES TO REGULAR<br></br>OPENING HOURS<br></br>0203 488 3470<br></br>Friday 4-9pm<br></br>Saturday 1-9pm</p>
                <button className='btn'><a href='pizzas'>Pop-up Pizzeria Menu</a></button>
                <img src='http://thedoughshack.co.uk/wp-content/uploads/2018/03/home-header-takeaway-1024x540.jpg' className='popUpImg' alt='pizza and beer'></img>
            </div>
            <Contact/>
        </div>
    );
};

export default Pizzeria;