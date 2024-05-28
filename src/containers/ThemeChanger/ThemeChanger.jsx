import React from 'react'
import './ThemeChanger.css'
import {FaSun, FaMoon} from 'react-icons/fa'
import { useState } from 'react'
import { useEffect } from 'react'

const ThemeChanger = () => {

  const [theme, setTheme] = useState('light')

  const handleClick = ()=>{
    setTheme((prevTheme)=> prevTheme === 'light' ? 'dark' : 'light')
  }


  return (
    <div className={`react__theme ${
      theme === 'light' ? 'light' : 'dark' }`}>
        <h1>Theme Changer</h1>
        <button className={`react__theme-container ${
          theme === 'light' ? 'light' : 'dark'
        }`} onClick={()=>handleClick()}>
          {theme === 'light' ? 'Switch to Dark Mode' :  'Switch to Light Mode' }
        </button>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, iure, eaque voluptas necessitatibus labore autem soluta a cum harum doloremque, iusto nostrum facere maxime voluptates reiciendis quaerat ut totam? Magni?</p>
    </div>
  )
}

export default ThemeChanger
