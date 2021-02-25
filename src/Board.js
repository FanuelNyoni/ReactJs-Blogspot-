import React from 'react';
import Square from './Square';

const Board = ({squares, onClick}) => {
    return ( 
        <div className = 'board'>
            {squares.map((sqaure, i) => {
                <Square key = {i} value = {sqaure} onClick = {() => onCLick(i)}/>
            })}
        </div>
     );
}
 
export default Board;