import React from 'react';

const Content = (props) => {
    return (
        <div className='textContent'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    );
};

export default Content;