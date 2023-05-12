import React,{useState} from 'react';
import Auditory from '../components/ServicesNew/Auditory'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ScrollToTopOnMount from '../components/Scrolltop/scrolltop';
const Audits =()=> {
  const[isOpen, setIsOpen] = useState(false); 
    const toggle = () => {
        setIsOpen(!isOpen);
        };
  return (
    
    <>
    <ScrollToTopOnMount/>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <Auditory  />
    </>
  )
}

export default Audits