import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import ServicesNav from '../components/ServicesNav'
import Sidebar from '../components/Sidebar';
import ScrollToTopOnMount from '../components/Scrolltop/scrolltop';
const services = () => {
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
    <ServicesNav></ServicesNav>
    </>
  )
}

export default services