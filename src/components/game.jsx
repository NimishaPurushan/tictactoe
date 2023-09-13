import Board from "./board";
import Message from "./message";
import Start from "./refresh";
import {reset} from '../store/tictactoe_slice.js'
import {useDispatch, useSelector} from 'react-redux'

const Game = () => {
    const dispatch = useDispatch()
    
    const start = () => {
        dispatch(reset())
    }

    return (
        <div>        
            <Board />
            <Message />
            <Start onClick={start} value={'Start'} />
        </div>
    )
}

export default Game;