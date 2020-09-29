import React, {useState} from 'react';

const boxes      = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const winOptions = ['brownie', 'garlic flat bread', 'pizza'];
let winningBox   = false;
let winningItem  = false;

const Game = (props) => {
    const [gameOpacity, setGameOpacity] = useState('gameBoxHidden gameBox');
    const [competition, setcompetition] = useState(false);

    const boxClicked = () => {

        winningBox  = boxes[Math.floor(Math.random() * boxes.length)];
        winningItem = winOptions[Math.floor(Math.random() * winOptions.length)];
        
        setcompetition(true);
        console.log(' winning item is: ', winningItem, 'and it was under box ', winningBox);
        setGameOpacity('gameBoxClear gameBox');
    }

    return (
        <div className='gameCont'>
            <h4>Before you leave us, how about a chance to win something free from our menu?!</h4>
            <p>Underneath one of these 10 boxes is a free gift of either <span className='winOption'>a brownie</span>, <span className='winOption'>garlic flat bread</span>, or <span className='winOption'>a pizza of your chosing</span>. Choose your box to see if you a winner!</p>
            <div className='divFlex'>
                {boxes.map((box, index) => {
                    if (competition & winningBox==index +1){
                        return <div className={gameOpacity} key={box} onClick={boxClicked}>{winningItem}</div>
                    }
                    return <div className={gameOpacity} key={box} onClick={boxClicked}>{box}</div>
                }
                    
                )}
            </div>
        </div>
    );
};

export default Game;