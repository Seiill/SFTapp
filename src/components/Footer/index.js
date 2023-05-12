import React from 'react'
import { animateScroll as scroll } from 'react-scroll/modules';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,SocialLogo, WebsiteRights, SocialIcons,SocialIconLink} from './FooterElements';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinkContainer>
      {/*       <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About us</FooterLinkTitle>
                    <FooterLink to="/signin"></FooterLink>
                    <FooterLink to="/contactus">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Services</FooterLink>                  
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact</FooterLinkTitle>
                    <FooterLink to="/signin"></FooterLink>
                    <FooterLink to="/signin">How it works</FooterLink>
                    <FooterLink to="/signin">Testimonials</FooterLink>
                    <FooterLink to="/signin">Investors</FooterLink>
                    <FooterLink to="/signin">Terms of Services</FooterLink>              
                </FooterLinkItems>
            </FooterLinksWrapper> */}
        </FooterLinkContainer>
        <SocialMedia>
            <SocialMediaWrap>   
            <SocialLogo to='/' onClick={toggleHome}>
                Safe
            </SocialLogo>
            <WebsiteRights> Safe Start Training © {/* {new(Date().getFullYear) */} All rights reserved </WebsiteRights>
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