import React, {useEffect, useState} from 'react';
import { IconContext } from 'react-icons/lib';
import {FaBars} from 'react-icons/fa';
import IconLogo from '../../images/SVG/logo.svg'
import { animateScroll as scroll } from 'react-scroll/modules';
import Dropdown from './Dropdown'
import { Nav, NavbarContainer,Img, NavLogo, MobileIcon, NavMenu, NavLinks, NavIten, NavBtn, NavBtnLink, List, Links} from './Navbarelements';
import { navItems, navItem, navItemInd, listAbout } from './navItem';
/* import { Link } from 'react-router-dom'; */
const Navbar = ({ toggle }) => {
    const [dropdown, setDropdown]= useState('');
    const [scrollNav, setScrollNav] = useState(false);

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
                    {navItems.map((item)=>{
                        if(item.title === "Services"){
                            return(
                                <NavIten>
                                <List key={item.id} onMouseUp={()=> setDropdown(item.id) }  onMouseEnter={()=> setDropdown(item.id)} onMouseLeave={()=>setDropdown(false)}>
                                    <Links to= {item.path} >{item.title}</Links>
                                    {(item.id === dropdown) && <Dropdown List={navItem} />}
                                </List>
                                </NavIten>
                            )
                            
                        } if(item.title === "Industries"){
                            return(
                                <NavIten>
                                <List key={item.id} onMouseUp={()=> setDropdown(item.id)}  onMouseEnter={()=> setDropdown(item.id)} onMouseLeave={()=>setDropdown(false)}>
                                    <Links to= {item.path} >{item.title}</Links>
                                    {(item.id === dropdown)  && <Dropdown List={navItemInd} />}
                                </List>
                                </NavIten>
                                
                            )
                        } if(item.title === "About"){
                            return(
                                <NavIten>
                                <List key={item.id} onMouseUp={()=> setDropdown(item.id)}  onMouseEnter={()=> setDropdown(item.id)} onMouseLeave={()=>setDropdown(false)}>
                                    <Links to= {item.path} >{item.title}</Links>
                                    {(item.id === dropdown)  && <Dropdown List={listAbout} />}
                                </List>
                                </NavIten>
                                
                            )
                        }
                        /* return(<NavIten><NavLinks key={item.id} to={item.path} smooth={true} duration={500} spy={true} exact='true' >{item.title}</NavLinks></NavIten>)   */
                    })}                    
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