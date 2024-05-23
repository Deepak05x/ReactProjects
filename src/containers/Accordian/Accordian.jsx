import React, { useState } from 'react'
import "./Accordian.css"
import AccordianContent from "./components/AccordianContent"
import AccordianSection from "./components/AccordianSection"
import add_icon from "../../assets/add.png"

const Accordian = () => {

    const [toggleMain, setToggleMain] = useState(false)



  return (
    <div className='react__accordian'>
        <div className='react__accordian-container'>
            <div className='react__accordian-container_heading' onClick={()=> setToggleMain(!toggleMain)}>
                <h1 >Multi-Section Accordian</h1>
                <img src={add_icon} alt="" />
            </div>
            <div className='react__accordian-container_elements'>
                {toggleMain && (
                <AccordianSection number={"first"} />
                )}

                {toggleMain && (
                <AccordianSection number={"second"} />
                )}

                {toggleMain && (
                <AccordianSection number={"third"} />
                )}

                {toggleMain && (
                <AccordianSection number={"fourth"} />
                )}

            </div>
        </div>
    </div>
  )
}

export default Accordian
