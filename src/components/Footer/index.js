import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinkContainer, SocialMedia, SocialMediaWrap,SocialLogo, WebsiteRights, SocialIcons,SocialIconLink} from './FooterElements';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
        </FooterLinkContainer>
        <SocialMedia>
            <SocialMediaWrap>   
            <SocialLogo to='/' onClick={toggleHome}>
                Safe
            </SocialLogo>
            <WebsiteRights> SafeStart Training © All rights reserved </WebsiteRights>
            <SocialIcons>
               <SocialIconLink href='https://www.facebook.com/SafeStartTraining' target='blank' aria-label='Facebook'>
                   <FaFacebook/>
               </SocialIconLink>
               <SocialIconLink href='https://www.instagram.com/safestarttraining/' target='blank' aria-label='Instagram'>
                   <FaInstagram/>
               </SocialIconLink>
               <SocialIconLink href='https://www.linkedin.com/company/safestart-training-llc/' target='blank' aria-label='Linkedin'>
                   <FaLinkedin/>
               </SocialIconLink>
            </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap> 
    </FooterContainer>
    </>
  )
}

export default Footer