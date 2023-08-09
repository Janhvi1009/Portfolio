import React from 'react'
import { useContext } from 'react'
import { sender } from './Component/Store'

const List = (props) => {

let {mode,setmode}=useContext(sender)

  return (
    <li className='nav-item'>
        <a className={`nav-link text-${mode?"light":"dark"}`} href={props.ID}>{props.name}</a>
    </li>
  )
}

export default List