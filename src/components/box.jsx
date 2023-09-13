import React from 'react'
import style from '../styles/box.module.css'

// just making the border thicker and increasing size of the fonts
// const style = {
// 	border: "2px inset black",
// 	fontSize: "40px",
//     background: "white",
// }   


/*
Box.jsx is the discrete unit structure of the Board.
It is made a button.
When its pressed it will call the function passed from porps.
It will display value that is passed from Board
*/
export const Box = (props) => <button  name={props.name}  style={style}  onClick={props.onClick}> {props.value}  </button>

export default Box