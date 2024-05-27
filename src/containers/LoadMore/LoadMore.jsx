import axios from 'axios'
import React, { useState, useCallback } from 'react'
import { useEffect } from 'react'
import './LoadMore.css'
import { useLayoutEffect } from 'react'

const LoadMore = ({url}) => {

    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const [limit, setLimit] = useState(20)

    useLayoutEffect(()=>{
        if(url != ' ') fetchImages(url)
    },[url,limit])

    const fetchImages = useCallback(async (url)=>{
        try{
            const response = await axios.get(`${url}&limit=${limit}`)
            const data = response.data
            setImages(data)
        }catch(e){
            setError(e.message)
        }
        
    },[limit])
    
    

    const handleClick = (prevLimit)=>{
        setLimit(prevLimit + 12)
    }

    const handleReset = ()=>{
        if (images.length > 20) {
            setImages(images.slice(0, 20))
        }
    }

  return (
    <div className='react__loadmore'>
        <h1>Load More Data</h1>
        {error && (
            <div className='react__loadmore-error'>
                <h2>{error}</h2>
            </div>
        )}
        <div className='react__loadmore-container'>
        {images.map((img,index)=>(
            <div className='react__loadmore-container_elements'>
              <img src={img.download_url} key={index} className='react__loadmore-img'/>
              <p>Each Image has its own perfection even if u find it imperfect </p>
            </div>
           
        ))}
        </div>
        <div className='react__loadmore-footer'>
        {limit < 101 
        ? <button className='react__loadmore-btn' onClick={()=>handleClick(limit)}>Load More</button>
        : <p className='react__loadmore-btn_msg'>Reached the limit</p>
        }
        <button className='react__loadmore-btn_reset' onClick={()=>handleReset()}>Reset</button>
        </div>
    </div>
  )
}

export default LoadMore
