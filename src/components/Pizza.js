import React from 'react';

const Pizza = (props) => {
    return (
        <div>
            <div className='menuCols'>
                <h4>{props.name}</h4>
                <div>
	                <button
	                	onClick={props.addPreoder}
	                	style={{marginRight: '10px'}}
	                >
	                	add to preoder list
	                </button>
                	<span>£{props.price}</span>
                </div>
            </div>
            <p>{props.ingredients}</p>
        </div>
    );
};

export default Pizza;