import React, { useContext, useState } from 'react'
import Header from '../Header'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { BiLogoJavascript } from 'react-icons/bi';
import { SiCss3 } from 'react-icons/si';
import './Skills.css'
import { sender } from '../Store';

const Skills = () => {  
  
  let Data=[
    {
      id:1,
      icon:<AiFillHtml5 />,
      title:"HTML",
      colour:"blue"
    },
    {
      id:2,
      icon:<SiCss3 />,
      title:"CSS",
      colour:"orange"
    },
    {
      id:3,
      icon:<FaBootstrap />,
      title:"BOOTSTRAP",
      colour:"violet"
    },
    {
      id:4,
      icon:<BiLogoJavascript />,
      title:"JAVASCRIPT",
      colour:"yellow"
    },
    {
      id:5,
      icon:<FaReact />,
      title:"REACT",
      colour:"indigo"
    }
  ]

  let [picker,setPicker]=useState(Data[0])

  let {mode,setMode}=useContext(sender)

  return (
    <>
      <div className={`container-fluid text-${mode?"light":"dark"} bg-${mode?"dark":"light"}`} id='Skills'>
        <Header title="MY Skills" />
        <div data-aos="flip-left" data-aos-easing='ease-out-cubic' data-aos-duration='2000' className="row align-items-center d-flex justify-content-center">
          <div className="col-md-2">
          {
            Data.map((e)=>{
              return(
                     <div className=" border border-dark text-center mb-2 rounded shadow"> 
                      <i className='icon_card' onMouseEnter={()=>setPicker(e)} style={{fontSize:'60px',color:e.colour}}>{e.icon}</i>
                     </div>    
              )  
            })  
          }
        </div>
        <div className="col-5 text-center  border border-dark rounded shadow w-75" >
            <span style={{fontSize:'200px',color:picker.colour}}>
              {picker.icon} 
            </span>
            <h1>{picker.title}</h1>
          </div>
          
        </div>
      </div>

    </>
  )
}

export default Skills