import React from 'react'
import image from "../../image/carton.png"
function ExampleCarouselImage({text}) {
  return (
    <div className='d-flex justify-content-center  '>
    <img src={image} alt='not found' className='carsol-image'/>
    </div>
  )
}

export default ExampleCarouselImage