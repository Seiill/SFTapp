import React,{useState} from 'react'
import AboutPage from '../components/AboutPage/AboutPage'
import Footer from '../components/Footer/index'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const About = () => {
    const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <AboutPage />
    <Footer />
    </>
  )
}

export default About