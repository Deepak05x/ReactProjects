import React from 'react'
import './QRCode.css'
import { useState, useRef } from 'react'
import QRCode from 'qrcode.react'
import { saveAs } from 'file-saver'


const QRCodeGenerator = () => {


    const [input, setInput] = useState('')
    const [code, setCode] = useState('')
    const qrRef = useRef()


    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    const handleCode = ()=>{
      setCode(input)
      setInput('')
    }

    const handleDownload = ()=>{
      const canvas = qrRef.current.querySelector('canvas')
      if(canvas){
        canvas.toBlob((blob)=>{
          saveAs(blob, 'qrcode.png')
        })
      }
    }

  


  return (
    <div className='react__code'>
        <h1>QR Code Generator</h1>
        <div className='react__code-input'>
            <input type="text" placeholder='Enter the url' value={input} onChange={handleChange}/>
            <button onClick={()=>handleCode()}>Generate</button>
        </div>
        <div className='react__code-output' ref={qrRef}>
        {code && (
          <>
            <QRCode value={code} size={250} bgColor={"#DCCA87"} includeMargin={true} />
            <div >
              <button onClick={()=>handleDownload()}>Download</button>
            </div>
          </>
        )}
      </div>
     
    </div>
  )
}

export default QRCodeGenerator
