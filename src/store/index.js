import tictactoeSlice from './tictactoe_slice';
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {  // reducers
        tictactoe: tictactoeSlice,
    },  
});
