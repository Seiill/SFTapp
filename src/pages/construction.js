import React, {useState} from 'react'
import Constructions from '../components/ServicesNew/Constructions'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const Construction = () => {
  const[isOpen, setIsOpen]= useState(false);
     
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <Constructions/>

    </>
  )
}

export default Construction