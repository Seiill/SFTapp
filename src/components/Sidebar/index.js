import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarMenu, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';

const Sidebar= ({isOpen, toggle})=> {
  return (
    <SidebarContainer isOpen={ isOpen } onClick={ toggle }>
        <Icon onClick={ toggle }>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'onClick={toggle}>
                About
                </SidebarLink>
                <SidebarLink to='discover'onClick={toggle}>
                Discover
                </SidebarLink>
                <SidebarLink to='service'onClick={toggle}>
                Services
                </SidebarLink>
                <SidebarLink to='signup'onClick={toggle}>
                Contact Us
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='./page/contactus'> Contact us</SidebarRoute>

            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar