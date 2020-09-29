import React, {useState} from 'react';

const boxes      = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const winOptions = ['brownie', 'garlic flat bread', 'pizza'];

const Game = (props) => {
    const [gameOpacity, setGameOpacity] = useState('gameBoxHidden gameBox');
    const [competition, setcompetition] = useState(false);
    const [winningBox, setwinningBox]   = useState(false)
    const [winningItem, setwinningItem] = useState(false)

    const boxClicked = () => {
        setwinningBox(boxes[Math.floor(Math.random() * boxes.length)]);
        setwinningItem(winOptions[Math.floor(Math.random() * winOptions.length)]);
        setcompetition(true);
        setGameOpacity('gameBoxClear gameBox');

    }

    return (
        <div className='gameCont'>
            <h4>Before you leave us, how about a chance to win something free from our menu?!</h4>
            <p>Underneath one of these 10 boxes is a free gift of either <span className='winOption'>a brownie</span>, <span className='winOption'>garlic flat bread</span>, or <span className='winOption'>a pizza of your chosing</span>. Choose your box to see if you a winner!</p>
            <div className='divFlex'>
                {boxes.map((box, index) => {
                    if (competition & parseInt(winningBox) === index +1){
                        return <div className={gameOpacity} key={box} onClick={boxClicked}><span id='winner'>{winningItem}</span></div>
                    }
                    return <div className={gameOpacity} key={box} onClick={boxClicked}>{box}</div>
                }
                    
                )}
            </div>
        </div>
    );
};

export default Game;