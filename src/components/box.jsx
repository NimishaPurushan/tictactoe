import React from 'react'
import style from '../styles/box.module.css'
import {setWinnerCells} from '../store/tictactoe.slice.js'
import {useSelector} from 'react-redux'


 

// just making the border thicker and increasing size of the fonts
// const style2 = {
// 	fontSize: "40px",
//     width: "100%",
//     height: "100%",
//     display: "flex",
//     AlignItems: "center",
//     JustifyContent: "center",
//     background: "grey",
//     border: "1px solid white" /* Add border to inner boxes */
// }   


/*
Box.jsx is the discrete unit structure of the Board.
It is made a button.
When its pressed it will call the function passed from porps.
It will display value that is passed from Board
*/
const Box = (props) => {
    const winnerCells = useSelector(state => state.tictactoe.winnerCells)
    if (winnerCells && (winnerCells.includes(props.name))) {
        var winnerCell = true
    } else {
        var winnerCell = false
    } 
    return  <button  name={props.name}  className={winnerCell? style.winningbox: style.box}  onClick={props.onClick}> {props.value}  </button>
    // <button  name={props.name}  className={winnerCells? style.winnerCell: style.box}  onClick={props.onClick}> {props.value}  </button>

}

export default Box