import React from 'react';

const Pizza = (props) => {
    return (
        <div>
            <div className='menuCols'>
                <h4>{props.name}</h4>
                <span>£{props.price}</span>
            </div>
            <p>{props.ingredients}</p>
        </div>
    );
};

export default Pizza;