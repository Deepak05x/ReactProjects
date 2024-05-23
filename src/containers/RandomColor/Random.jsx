import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./Random.css"

const Random = () => {

    const [colors , setColors] = useState("#000000")
    const [typeofColor, setTypeofColor] = useState("hex")


    useEffect(()=>{
        if(typeofColor === 'rgb') generateRGBColor()
        else generateHexColor()
    },[typeofColor])

    const randomColorUtility = (length)=>{
        return Math.floor(Math.random() * length)
    }

    const generateHexColor = ()=>{
        const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor = "#"

        for(let i = 0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColors(hexColor)
    }


    const generateRGBColor = ()=>{
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        const rgb = `rgb(${r}, ${g}, ${b})`
        setColors(rgb)
    }

  return (
    <div className='react__random' style={{backgroundColor : colors}}>
        <div className='react__random-btn'>
            <h1>Generate Random Color</h1>
            <button onClick={()=>setTypeofColor('hex')}>Hex</button>
            <button onClick={()=>setTypeofColor('rgb')}>RGB</button>
            <button onClick={() => typeofColor === 'hex' ? generateHexColor() : generateRGBColor()}>Random Color</button>
            <button onClick={()=>setColors(()=>{typeofColor === 'rgb' ? setColors("rgb(12,12,12)") : setColors("#0C0C0C")})}>Reset</button>
        </div>
        <div className='react__random-desc'>
            <h2>{typeofColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h2>
            <h3>{colors}</h3>
        </div>
    </div>
  )
}

export default Random
