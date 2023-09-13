import {reset} from '../store/tictactoe_slice.js'
import {useDispatch, useSelector} from 'react-redux'
import React from 'react'
import style from '../styles/message.module.css'

const Message = () => {
    const dispatch = useDispatch()
    const winner = useSelector(state => state.tictactoe.winner)
  
    const onDialogClose = () => {
        dispatch(reset())
    }
    const DialogBox = ({result, onClose}) => {
        return (
            <div className={style.pop}>
                <h1>Game Over</h1>
                <h2>{result}</h2>
                <button onClick={onClose}>Close</button>
            </div>
        )
    }

    return (
        <div>
        {winner && <DialogBox result={winner} onClose={onDialogClose} />}
        </div>
    )
}


export default Message;
