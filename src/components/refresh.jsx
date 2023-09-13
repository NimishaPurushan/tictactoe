import React from 'react'
import style from '../styles/button.module.css'


const Start = (props) => <button className={style.button} name={"btn"}  onClick={props.onClick}>{props.value}</button>

export default Start