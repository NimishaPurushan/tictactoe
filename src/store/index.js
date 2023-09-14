import tictactoeSlice from './tictactoe.slice';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {  // reducers
        tictactoe: tictactoeSlice,
    },  
});
