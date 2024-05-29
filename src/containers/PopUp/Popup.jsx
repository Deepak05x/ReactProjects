import React from 'react'
import { useState } from 'react'
import './Popup.css'
import {IoIosClose } from 'react-icons/io'

const Popup = () => {

    const [pop, setPop] = useState(false)

    const handleClick = ()=>{
        setPop(!pop)
    }

  return (
    <div className={`react__popup ${
        pop === true ? 'blur' : ''
    }`}>
          <button className={`react__popup-btn ${
            pop === true ? 'active' : ' '
          }`} onClick={()=>handleClick()}>Pop Up Model</button> 
          {pop && (
            <div className='react__popup-container'>
                <h1 className='react__popup-header'>This is the Heading</h1>
                <p className='react__popup-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim dignissimos itaque repellendus, ducimus quidem hic est nostrum, eaque cupiditate quisquam nihil possimus tempore, cum praesentium aperiam cumque libero. Praesentium, nemo!</p>
                <h2 className='react__popup-footer'>This is the footer</h2>
                <IoIosClose className='icon' onClick={()=> setPop(false)}/>
            </div>
          )} 
    </div>
  )
}

export default Popup
