import React, {useState} from 'react'
import Trainings from '../components/ServicesNew/Trainings'
import Footer from '../components/Footer/index'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollToTopOnMount from '../components/Scrolltop/scrolltop'
const Training = () => {
  const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <ScrollToTopOnMount/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    <Trainings />
    <Footer />
    </>

  )
}

export default Training