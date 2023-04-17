import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ServiceManufacturing from '../components/ServicesNew/Manufacturing'

const Manufacturing = () => {
  const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <ServiceManufacturing/>
    </>
    
  )
}

export default Manufacturing