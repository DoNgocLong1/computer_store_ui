import React from "react";
import { useState, useEffect } from "react";
import './ImageSlide.css'
const IMAGE_SLIDE_STORAGE_KEY = 'SLD_CARD'
const imgeSlide = JSON.parse(localStorage.getItem(IMAGE_SLIDE_STORAGE_KEY) || '[]')

function ImageSlide() {
    const [image, setImage] = useState(0) 
    const handleNextSilde = () => {
        if(image < imgeSlide.length - 1) {
            setImage(prev => prev + 1)
        }else {
            setImage(0)
        }
    }
    const handlePrevSilde = () => {
        if(image === 0) {
            setImage(imgeSlide.length - 1)
        }else {
            setImage(prev => prev -1)
        }
    } 
    useEffect(() => {
        const autoSlide = setInterval(() => {
            if(image < imgeSlide.length - 1) {
                setImage(prev => prev + 1)
            }else {
                setImage(0)
            }
        },5000)
        return () => {
            clearInterval(autoSlide)
        }
    },[image])
    return (
       <div className="image_slide">
            <img src={imgeSlide[image].image} alt="" />
            <div className="prev option" onClick={handlePrevSilde}>
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="next option" onClick={handleNextSilde}>
                <i className="fa-solid fa-angle-right"></i>
            </div>
       </div>
    )
}
export default ImageSlide