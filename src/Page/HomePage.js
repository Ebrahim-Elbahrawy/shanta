import React from 'react'

import HomeCategory from '../component/home/HomeCategory'
import Slider from '../component/home/Slider'
import { Container } from 'react-bootstrap'
import SliderScreen from '../component/home/SliderScreen'

function HomePage() {
  return (
    <Container>
      <SliderScreen/>
   <HomeCategory />
    <Slider />
   </Container>
  )
}

export default HomePage