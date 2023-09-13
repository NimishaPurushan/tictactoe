import {setSquare, setXIsNext, setWinner} from '../store/tictactoe_slice.js'
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect } from 'react'
import Box from './box'
import {checkWinner, findBestMove} from '../utils/calculateWinner.js'

// creating a sqaure box in with grid layout
const style = {

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
        zIndex: -1,
        margin: "auto",
        border: "none", /* Remove outer border */
        overflow: "hidden", /* Hide scrollbars */
};

// creating a board with 9 boxes
const Board = () => {
    const dispatch = useDispatch()
    const a = useSelector(state => state.tictactoe)
    console.log(a)
    const value = useSelector(state => state.tictactoe.squares)
    const isUserTurn = useSelector(state => state.tictactoe.isUserTurn)
    const winner = useSelector(state => state.tictactoe.winner)
  

    useEffect(() => {
        if (!isUserTurn) {
            console.log("Boar----");
            // Let's assume computermove is synchronous
            let move = findBestMove([...value]);
            console.log("move:",move)
            dispatch(setSquare({ index: move, value: 'O' }));
            const newWinner = checkWinner(value);
            console.log(newWinner)
            if (newWinner) {
                dispatch(setWinner(newWinner));
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
        <div style={style}>

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
