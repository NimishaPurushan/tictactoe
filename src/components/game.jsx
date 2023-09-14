import Board from "./board";
import Message from "./message";
import Start from "./refresh";
import {reset, setXIsNext} from '../store/tictactoe.slice.js'
import {useDispatch, useSelector} from 'react-redux'

const Game = () => {
    const dispatch = useDispatch()
    const isUserTurn = useSelector(state => state.tictactoe.isUserTurn)
    
    const start = () => {
        dispatch(reset())
    }

    return (
        <div >      
            <Start onClick={start} value={"Start"} />  
            <h1>{isUserTurn? "Your Turn": "Computer Turn"}</h1>
            <Board />
            <Message />
        </div>
    )
}

export default Game;