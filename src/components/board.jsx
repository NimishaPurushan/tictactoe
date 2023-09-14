import {setSquare, setXIsNext, setWinner, setWinnerCells} from '../store/tictactoe.slice.js'
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import Box from './box'
import {checkWinner, findBestMove} from '../utils/calculateWinner.js'
import style from '../styles/board.module.css'

// creating a sqaure box in with grid layout
const style2 = {

        width: "300px",
        height: "300px",
        display: "grid",
        background: "white",
        gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "auto",
        border: "none", /* Remove outer border */
        overflow: "hidden", /* Hide scrollbars */
        outline: "none", /* Remove Chrome outline */
        
};

// creating a board with 9 boxes
const Board = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.tictactoe.squares)
    const isUserTurn = useSelector(state => state.tictactoe.isUserTurn)
    const winner = useSelector(state => state.tictactoe.winner)  

    useEffect(() => {
        if (!isUserTurn) {
            // Let's assume computermove is synchronous
            let move = findBestMove([...value]);
            dispatch(setSquare({ index: move, value: 'O' }));
            const [newWinner, WinningCells] = checkWinner(value);
            console.log(newWinner)
            if (newWinner) {
                dispatch(setWinner(newWinner));
                dispatch(setWinnerCells(WinningCells));
            }
            dispatch(setXIsNext(!isUserTurn)); // Re-enable user's turn after computer's move
        }
    }, [isUserTurn, value, dispatch]);


    const handleClick = (pos) => {
        const user = 'X';
        if (!value[pos] && !winner) {
            dispatch(setSquare({ index: pos, value: user }));
            dispatch(setXIsNext(!isUserTurn));
        }
    };

    return (
        <div>
        <div className={style.board}>
            {[ ...Array(9)].map((_, pos) => 
            <Box 
            key={pos} name={pos} 
            onClick={()=>handleClick(pos)} value={value[pos]}
            />)}
        </div>
        </div>
    )
}


export default Board;
