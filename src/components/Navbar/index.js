import React, {useEffect, useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {FaBars} from 'react-icons/fa';
import IconLogo from '../../images/SVG/logo.svg'
import { animateScroll as scroll } from 'react-scroll/modules';
import { Nav, NavbarContainer,Img, NavLogo, MobileIcon, NavMenu, NavLinks, NavIten, NavBtn, NavBtnLink } from './Navbarelements';
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if( window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', changeNav)
    },[]);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}/>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome} ><Img src={IconLogo}></Img></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavIten>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">About</NavLinks>
                    </NavIten>
                    <NavIten>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' >Training</NavLinks>
                    </NavIten>
                    <NavIten>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' /* offset={-80} */>Services</NavLinks>
                    </NavIten>
                    
                </NavMenu>
                <NavBtn>
                <NavBtnLink to ="/contactus" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavBtnLink>
                </NavBtn>
               
                
            </NavbarContainer>
        </Nav>
        <IconContext.Provider/>
    </>
  )
}

export default Navbar;