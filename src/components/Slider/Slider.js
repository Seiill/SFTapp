import React from 'react'
import { homeObjFour, homeObjFive, homeObjSix } from '../InfoSection/Data';
import {InfoSection} from '../InfoSection';
import { SliderC } from './SliderElements';
const Slider = () => {
  return (
    <>
    <SliderC>
        <InfoSection {...homeObjFour}/>
        <InfoSection {...homeObjFive}/>
        <InfoSection {...homeObjSix}/>
    </SliderC>
        
    </>
    
    
  )
}

export default Slider