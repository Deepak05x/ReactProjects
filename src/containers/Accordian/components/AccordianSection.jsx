import React, { useState } from 'react'
import add_icon from "../../../assets/add.png"
import AccordianContent from './AccordianContent'
import "./AccordianSection.css"

const AccordianSection = ({number}) => {

  const [toggleContent, setToggleContent] = useState(false)

  return (
    <div className='react__section' onClick={() => setToggleContent(!toggleContent)}>
      <div className='react__section-heading' >
        <h2>This is the {number} accordian</h2>
        <div className='react__section-img'>
          <img src={add_icon} alt="" />
        </div>
      </div>
      {toggleContent  && (
          <AccordianContent />
      )}  
    </div>
  )
}

export default AccordianSection
