import React,{useState} from 'react';
import Auditory from '../components/ServicesNew/Auditory'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const Audits =()=> {

  const[isOpen, setIsOpen] = useState(false); 
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <Auditory />
    </>
  )
}

export default Audits