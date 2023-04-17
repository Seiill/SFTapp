import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import Slider from '../components/Carrousel/Slider'


const Home = () => {
    const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...homeObjOne}/>
        {/* <InfoSection {...homeObjTwo}/> */}
        <Services/>
        <InfoSection {...homeObjThree}/>
        <Slider />
        <Footer/>
    </>
  )
}

export default Home