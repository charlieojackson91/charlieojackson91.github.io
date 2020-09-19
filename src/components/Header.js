import React from 'react';

const Header = () => {
    return(
        <div className='navigation'>
            <ul>
                <li><a href='/'>Hello</a></li>
                <li><a href='/pizza'>Pizza</a></li>
                <li><a href='/about-us'>About us</a></li>
                <li><a href='/order'>Pre order</a></li>
            </ul>
        </div>
    )
};

export default Header;