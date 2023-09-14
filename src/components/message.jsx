import {reset} from '../store/tictactoe.slice.js'
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
                <h2>
    {result === "draw" ? "DRAW" : result === "X" ? "YOU WON !!" : "COMPUTER WON, TRY AGAIN"}
                </h2>                
                <button onClick={onClose}>Close</button>
            </div>
        )
    }

    return (
        <div style={{position:"relative",
        display: winner ? "flex" : "none",
        }}>
         <DialogBox result={winner} onClose={onDialogClose} />
        </div>
    )
}


export default Message;
