import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import IconLogo from '../../images/SVG/logo.svg';
import { animateScroll as scroll } from 'react-scroll/modules';
import Dropdown from './Dropdown';
import {
  Nav,
  NavbarContainer,
  Img,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem, // Corregido: 'NavIten' a 'NavItem'
  NavBtn,
  NavLinks,
  NavBtnLink,
  List,
  Links,
} from './Navbarelements';
import { dropdownListMap, navItems } from './navItem'; // Importar dropdownListMap

const Navbar = ({ toggle }) => {
  const [dropdown, setDropdown] = useState('');
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    setScrollNav(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    return () => window.removeEventListener('scroll', changeNav); // Limpieza
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }} />
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Img src={IconLogo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navItems.map((item) => (
              <NavItem key={item.id}>
                {item.title === "Services" || item.title === "Industries" || item.title === "About" ? (
                  <List
                    onMouseEnter={() => setDropdown(item.id)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Links to={item.path}>{item.title}</Links>
                    {item.id === dropdown && <Dropdown List={dropdownListMap[item.title]} />}
                  </List>
                ) : (
                  <NavLinks to={item.path} smooth={true} duration={500} spy={true} exact={true}>
                    {item.title}
                  </NavLinks>
                )}
              </NavItem>
            ))}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contactus" smooth={true} duration={500} spy={true} exact={true} offset={-80}>
              Contact Us
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
      <IconContext.Provider />
    </>
  );
};

export default Navbar;