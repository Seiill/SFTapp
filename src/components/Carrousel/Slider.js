import React from 'react'
import { useState } from 'react'
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from 'react-icons/bs'
import InfoSection from '../InfoSection';
import { testimonioOne, testimonioTwo, testimonioThree } from '../InfoSection/Data';

import {Container, Arrow, Wrapper,Slide} from './sliderElements.js'

const Slider = () => {
  const [slideIndex,setSlideIndex] = useState(0);

    const handleClick = direction => {
      if (direction ==='left'){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)  
      }else{
        setSlideIndex(slideIndex < 2  ? slideIndex +1 : 0)
      }
    }
  return (
    <Container>
      <Arrow direction='right' onClick={()=> handleClick('right')}>
        <BsFillArrowRightCircleFill color='#01bf71'/>
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        <Slide>
          <InfoSection {...testimonioOne}/>
        </Slide>
        <Slide>
          <InfoSection {...testimonioTwo}/>
        </Slide>
        <Slide>
          <InfoSection {...testimonioThree}/>
        </Slide>
      </Wrapper>
      <Arrow direction='left'onClick={()=> handleClick('left')}>
        <BsFillArrowLeftCircleFill color='#01bf71'/>
      </Arrow>
    </Container>
  )
}

export default Slider