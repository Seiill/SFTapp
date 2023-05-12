import React, {useState} from 'react'
import Truckings from '../components/ServicesNew/Truckings'
import Footer from '../components/Footer/index'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ScrollToTopOnMount from '../components/Scrolltop/scrolltop'
const Trucking = () => {
  const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <ScrollToTopOnMount/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Truckings />
    <Footer />
    </>

  )
}

export default Trucking