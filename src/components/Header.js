import React from 'react';
import {Link} from "react-router-dom";

const Header = ({preoders}) => {
    return(
        <div className='navigation'>
            <ul>
                <li><Link to='/'>Hello</Link></li>
                <li><Link to='/pizza'>Pizza</Link></li>
                <li><Link to='/about-us'>About us</Link></li>
                <li><Link to='/order'>Pre order</Link>{preoders.length}</li>
            </ul>
        </div>
    )
};

export default Header;