import {createSlice} from '@reduxjs/toolkit';
import {checkWinner} from '../utils/calculateWinner.js'


const initialState = {
    squares: Array(9).fill(null),
    isUserTurn: true,
    winner: null,
};

const tictactoeSlice = createSlice({
    name: 'tictactoe',
    initialState,
    reducers: { // actions
        setSquare: (state, action) => {
            const {index, value} = action.payload;
            state.squares[index] = value;
            console.log(state.squares);
            let newWinner = checkWinner(state.squares);
            console.log(newWinner);
            if (newWinner){
                state.winner=newWinner;}
        },
        setXIsNext: (state, action) => {
            state.isUserTurn = action.payload;
        },
        setWinner: (state, action) => {
            state.winner = action.payload;
        },
        reset: () => initialState,  // reset to initial state
    },
});

export const {setSquare, setXIsNext, setWinner, reset} = tictactoeSlice.actions;

export default tictactoeSlice.reducer;

