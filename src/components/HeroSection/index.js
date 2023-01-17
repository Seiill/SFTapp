import React, { useState } from 'react';
/* import { FaArrowRight } from 'react-icons/fa' */
import Video from '../../video/home1.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1,HeroP, HeroBtnWrapper, ArrowForward,ArrowRight } from './HeroElements'


const HeroSection =() => {
  const [hover, setHover]= useState(false);
  
  const onHover =() =>{
    setHover(!hover);
  };
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
      <HeroH1>Improving People Safety and Health</HeroH1>
      <HeroP>At SafeStart Training, we are comprised of leaders with decades of experience and deep, trusted relationships in the safety industry. 
      </HeroP>
      <HeroBtnWrapper>
        <Button to="About" onMouseEnter={onHover}
        onMouseLeave={onHover}
        primary="true"
        dark="true"
        >More {hover ? <ArrowForward/> : <ArrowRight />}</Button>
      </HeroBtnWrapper>
    </HeroContent>
    </HeroContainer>
    
  )
}

export default HeroSection