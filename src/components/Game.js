import React from 'react';

const boxes      = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const winOptions = ['brownie', 'garlic flat bread', 'pizza'];

const Game = (props) => {
    return (
        <div className='gameCont'>
            <h4>Before you leave us, how about a chance to win something free from our menu?!</h4>
            <p>Underneath one of these 10 boxes is a free gift of either <span className='winOption'>a brownie</span>, <span className='winOption'>garlic flat bread</span>, or <span className='winOption'>a pizza of your chosing</span>. Choose your box to see if you a winner!</p>
            <div className='divFlex'>
                {boxes.map(box => 
                    <div className='gameBox' key={box}>{box}</div>
                )}
            </div>
        </div>
    );
};

export default Game;