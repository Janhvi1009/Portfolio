import React, { useContext } from 'react'
import { sender } from './Store'

const Footer = () => {

  let {mode,setMode}=useContext(sender)

  return (
    <>
        <div className={`container-fluid text-${mode?"light":"dark"} bg-${mode?"dark":"light"}`}>
        <div className="row">
            <div className="col p-3 text-light bg-dark text-center">
                <h3>Copyright@2023 All right reserved</h3>
                <h4>Designed by Janhvi Kolhe</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer