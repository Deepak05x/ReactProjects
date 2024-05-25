import React from 'react'
import './ImageSlider.css'
import {FaArrowLeft, FaArrowRight} from  'react-icons/fa'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const ImageSlider = ({url, limit}) => {

    const [images, setImages] = useState([])
    const [error, setError] = useState(null)
    const [currentIndex, setCurrentIndex] =useState(0)
  

    const fetchImages = async (url)=>{

        try{
            const response = await axios.get(`${url}?page=2&limit=${limit}`)
            const data = response.data
            setImages(data)
        }catch(e){
            setError(e.message)
            console.log(error)
        }
        
    }

    useEffect(()=>{
        if(url!== ' ') fetchImages(url)
    },[url])



    const prevClick = ()=>{
            setCurrentIndex((prevIndex) => (
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            ))
    }

    const nextClick = ()=>{
            setCurrentIndex((prevIndex)=>(
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ))
    }


  return (
    <div className='react__slider'>
        <h1>Image Carousel</h1>
        {error && (
            <div className='react__slider-error'>
                    <p>There is an error in fetching the images : </p>
                    <p>{error}</p>
            </div>
            
        )}
        <div className='react__slider-container'
        >
                 {images.length > 0 && (
                    <img
                        src={images[currentIndex].download_url}
                        alt={`Slide ${currentIndex + 1}`}
                        className="react__slider-container_images"
                    />
                )}
        </div>
        <FaArrowLeft className='arrow arrow-left' onClick={()=>prevClick()}/>
        <FaArrowRight className='arrow arrow-right' onClick={()=>nextClick()}/>
        <div className='react__slider-indicator'>
            {images.map((_,index)=>(
                <button 
                key={index}
                className={`react__slider-indicator_button ${
                    index === currentIndex ? 'isActive' : ' '
                }`}
                onClick={()=>setCurrentIndex(index)}
                ></button>
            ))}
        </div>
    </div>
  )
}

export default ImageSlider
