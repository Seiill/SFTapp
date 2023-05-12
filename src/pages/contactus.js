import React,{ useState} from 'react'
import ContactUs from '../components/Contact/index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ScrollToTopOnMount from '../components/Scrolltop/scrolltop';
const Contactus = () => {
  const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <ScrollToTopOnMount/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <ContactUs/>
    </>
      
    
    
  )} 
  

export default Contactus;