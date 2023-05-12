import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ServiceManufacturing from '../components/ServicesNew/Manufacturing'
import ScrollToTopOnMount from '../components/Scrolltop/scrolltop';
const Manufacturing = () => {
  const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <ScrollToTopOnMount/>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <ServiceManufacturing/>
    </>
    
  )
}

export default Manufacturing