import React from 'react';
import Pizza from './Pizza';

const Menu = (props) => {
    console.log(props.menuSelected);
    return (
        <div className='menu'>
            <div className='menuType'>
                <div id='selected'>
                    <span onClick={props.menuSelection}>Van Menu</span>
                </div>
                <div>
                    <span onClick={props.menuSelection}>Pop-up Pizzeria</span>
                </div>
            </div>
            { props.menuSelected === 0 ?
            <div className='menuSeperator'>
                <div className='menuImgCont'>
                    <img src='http://thedoughshack.co.uk/wp-content/uploads/pizza-closeup-2.jpg' alt='zoomed in shot of pizza' id='menuImg'></img>
                </div>
                <div className='menuItems'>
                    <h2>Van Menu</h2>
                    <Pizza
                    name='Margherita (v)'
                    price='7'
                    ingredients='Mozzarella, fior de latte, fresh basil'/>

                    <Pizza
                    name='Pepperoni'
                    price='8'
                    ingredients='Italian sliced pepperoni'/>
                    
                    <Pizza
                    name='Ham and Mushroom'
                    price='8'
                    ingredients='Wiltshire ham, portobello mushrooms'/>
                    
                    <Pizza
                    name='Vegetarian (v)'
                    price='8'
                    ingredients='Red onion, baby spinach, mushrooms, baby plum tomatoes & parmesan'/>
                    
                    <Pizza
                    name='Nduja'
                    price='9'
                    ingredients='Spiced Italian sausage, shropshire blue & spinach'/>
                    
                    <Pizza
                    name='Buffalo (v)'
                    price='9'
                    ingredients='Yellow sun-blush tomatoes, green pesto, buffalo mozzarella, parmesan & cracked black pepper'/>
                    
                    <Pizza
                    name='Duck'
                    price='9'
                    ingredients='Confit duck, garlic oil, hoisin, spring onions, chillies & cucumber'/>
                    
                    <Pizza
                    name='Vegan (vg)'
                    price='9'
                    ingredients='Vegan cheese, spinach, red onion, sunblush tomatoes, portobello mushrooms & kalamata olives'/>
                    
                    <Pizza
                    name='Garlic Flat Bread'
                    price='5'
                    ingredients='Garlic, rosemary & oregano'/>
                    
                    <Pizza
                    name='Honey & Seeded Flat Bread'
                    price='6'
                    ingredients='Garlic, poppy & sesame seeds with a Honey Drizzle'/>
                    
                    <Pizza
                    name='Dips'
                    price='1'
                    ingredients='Aioli, spicy aioli, pesto aioli'/>
                    
                    <Pizza
                    name='Extras'
                    price='9'
                    ingredients='Olives, pineapple, chillies, rocket'/>
                    
                    <Pizza
                    name='Glazed & Seeded'
                    price='1'
                    ingredients='Honey glazed crust with poppy & sesame seeds'/>
                    
                    <Pizza
                    name='Gourmet Brownies'
                    price='3'
                    ingredients='2 for £5 (contains nuts)'/>
                    
                </div> 
            </div> : 
            
            <div className='menuSeperator'>
                <div className='menuImgCont'>
                    <img src='http://thedoughshack.co.uk/wp-content/uploads/2018/10/20180311-THE_DOUGH_SHACK_013.jpg' alt='zoomed in shot of pizza' id='menuImg'></img>
                </div>
                <div className='menuItems'>
                    <h2>Pop-up Pizzeria</h2>
                    <Pizza
                    name='Margherita (v)'
                    price='7'
                    ingredients='Mozzarella, fior de latte, fresh basil'/>

                    <Pizza
                    name='Pepperoni'
                    price='8'
                    ingredients='Italian sliced pepperoni'/>
                    
                    <Pizza
                    name='Ham and Mushroom'
                    price='8'
                    ingredients='Wiltshire ham, portobello mushrooms'/>
                    
                    <Pizza
                    name='Vegetarian (v)'
                    price='8'
                    ingredients='Red onion, baby spinach, mushrooms, baby plum tomatoes & parmesan'/>
                    
                    <Pizza
                    name='Nduja'
                    price='9'
                    ingredients='Spiced Italian sausage, shropshire blue & spinach'/>
                    
                    <Pizza
                    name='Buffalo (v)'
                    price='9'
                    ingredients='Yellow sun-blush tomatoes, green pesto, buffalo mozzarella, parmesan & cracked black pepper'/>
                    
                    <Pizza
                    name='Duck'
                    price='9'
                    ingredients='Confit duck, garlic oil, hoisin, spring onions, chillies & cucumber'/>
                    
                    <Pizza
                    name='Vegan (vg)'
                    price='9'
                    ingredients='Vegan cheese, spinach, red onion, sunblush tomatoes, portobello mushrooms & kalamata olives'/>
                    
                    <Pizza
                    name='Garlic Flat Bread'
                    price='5'
                    ingredients='Garlic, rosemary & oregano'/>
                    
                    <Pizza
                    name='Honey & Seeded Flat Bread'
                    price='6'
                    ingredients='Garlic, poppy & sesame seeds with a Honey Drizzle'/>
                    
                    <Pizza
                    name='Dips'
                    price='1'
                    ingredients='Aioli, spicy aioli, pesto aioli'/>
                    
                    <Pizza
                    name='Extras'
                    price='9'
                    ingredients='Olives, pineapple, chillies, rocket'/>
                    
                    <Pizza
                    name='Glazed & Seeded'
                    price='1'
                    ingredients='Honey glazed crust with poppy & sesame seeds'/>
                    
                    <Pizza
                    name='Gourmet Brownies'
                    price='3'
                    ingredients='2 for £5 (contains nuts)'/>
                    
                </div> 
            </div> }
        </div>

    );
};

export default Menu;