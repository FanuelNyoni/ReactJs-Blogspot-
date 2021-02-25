import React, { useState } from 'react';
import Board from './Board';
import {calculateWinner} from './Helper'


const Games = () => {
    
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(9)
    const [xIsNext, setxIsNext] = useState(true)
    const winner = calculateWinner(history[stepNumber])
    const xO = xIsNext ? 'x' : 'O';

    const handCLick = () => {
        const historyPoint = history.slice(0 , stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        //return if occupied or someone wins
        if (winner || squares[i]) return;
        //select square
        squares[i] = xO;
        
    }

    
    return (
        <div className = 'game-area'>
            <div className = 'snake-dot' style = ''></div>
        </div>
    );
}
export default Games;