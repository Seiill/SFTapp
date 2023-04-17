import React, {useState} from 'react'
import Footer from '../components/Footer/index'
import Consoulting from '../components/ServicesNew/Consoulting'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
const Consulting = () => {
  const[isOpen, setIsOpen]= useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Consoulting />
    <Footer/>
    </>
  )
}

export default Consulting