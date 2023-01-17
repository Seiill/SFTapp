import React from 'react'
import { ParallaxImg, TitleContainer, Title } from '../ServicesNew/servicesElements'
import InfoSection from '../InfoSection'
import { AboutMision, AboutVision, WeAre } from '../InfoSection/Data'
import backgroundImage from '../../images/aboutimg.jpg'

const AboutPage = () => {
  return (
    <>
    <ParallaxImg img={backgroundImage} >
      <TitleContainer>
          <Title>About Us</Title>
      </TitleContainer>
    </ParallaxImg>
    <InfoSection {...AboutMision}/>
    <InfoSection {...AboutVision}/>
    <InfoSection {...WeAre}/>
    </>
  )
}

export default AboutPage