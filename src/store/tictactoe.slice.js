import {createSlice} from '@reduxjs/toolkit';
import {checkWinner} from '../utils/calculateWinner.js'


const initialState = {
    squares: Array(9).fill(null),
    isUserTurn: true,
    winner: null,
    winnerCells: null,
};

const tictactoeSlice = createSlice({
    name: 'tictactoe',
    initialState,
    reducers: { // actions
        setSquare: (state, action) => {
            const {index, value} = action.payload;
            state.squares[index] = value;
            console.log("================>", state.squares);
            let [newWinner, WinnerCells] = checkWinner(state.squares);
            console.log(newWinner);
            if (newWinner){
                state.winner=newWinner;
                state.winnerCells=WinnerCells;}
        },
        setXIsNext: (state, action) => {
            state.isUserTurn = action.payload;
        },
        setWinner: (state, action) => {
            state.winner = action.payload;
        },
        setWinnerCells: (state, action) => {
            state.winnerCells = action.payload;
        },
        reset: () => initialState,  // reset to initial state
    },
});

export const {setSquare, setXIsNext, setWinner, reset, setWinnerCells} = tictactoeSlice.actions;

export default tictactoeSlice.reducer;

