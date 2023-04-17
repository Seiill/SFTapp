import React,{useState}  from 'react'
import Dropdown from '../Navbar/Dropdown';
import { SidebarContainer, Icon, CloseIcon,SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';
import { Links } from '../Navbar/DropdownElemnts';
import { navItems, navItem, navItemInd, listAbout } from '../Navbar/navItem';

const Sidebar= ({isOpen, toggle})=> {
    const [dropdown, setDropdown]= useState('');
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
        <Icon onClick={ toggle }>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                {navItems.map((item)=>{
                    if(item.title === 'Services') {
                        return(
                            <SidebarLink key={item.id} onMouseUp={()=> setDropdown(item.id) }  onMouseEnter={()=> setDropdown(item.id)} onMouseLeave={()=>setDropdown(false)}><Links to= {item.path} >{item.title}</Links>
                            {(item.id === dropdown) && <Dropdown List={navItem} />}</SidebarLink>
                        )
                    } if(item.title === 'Industries') {
                        return(
                            <SidebarLink key={item.id} onMouseUp={()=> setDropdown(item.id) }  onMouseEnter={()=> setDropdown(item.id)} onMouseLeave={()=>setDropdown(false)}><Links to= {item.path} >{item.title}</Links>
                            {(item.id === dropdown) && <Dropdown List={navItemInd} />}</SidebarLink>
                        )
                    }if(item.title === 'About') {
                        return(
                            <SidebarLink key={item.id} onMouseUp={()=> setDropdown(item.id) }  onMouseEnter={()=> setDropdown(item.id)} onMouseLeave={()=>setDropdown(false)}><Links to= {item.path} >{item.title}</Links>
                            {(item.id === dropdown) && <Dropdown List={listAbout} />}</SidebarLink>
                        )
                    } 
                    return(<SidebarLink key={item.id}>{item.title} </SidebarLink>) 

                } )}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/contactus'> Contact us</SidebarRoute>

            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar