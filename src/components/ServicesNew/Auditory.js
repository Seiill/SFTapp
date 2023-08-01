import React from 'react';
import Icon1 from '../../images/SVG/consulting.svg'
import Icon2 from '../../images/au2.jpeg'
import Icon3 from '../../images/au3.jpeg'
import Icon4 from '../../images/au4.jpeg'
import Icon5 from '../../images/au1.jpeg'
import Icon6 from '../../images/au5.jpeg'
import Icon7 from '../../images/au6.jpeg'
import Icon8 from '../../images/au3.jpeg'
import backgroundImage from '../../images/auditorypll.jpeg'
import FlipCard from '../FlipCard/FlipCard'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,ImageList,ImageContainer, ContainerServiceConsoulting, P} from './servicesElements'

const Auditory = () => {
    return (
      <Container>
      <ParallaxImg img={backgroundImage}>
        <TitleContainer>
            <Title>Audits & Inspections</Title>
            <Icon src={Icon1}></Icon>
        </TitleContainer>
      </ParallaxImg>
      <Section>
        <ContainerSection>
        <DescriptionPrincipal>
        <b>An Audit is More than An Inspection</b><br/>
        Third-party safety audits are the best and
most reliable method to ensure the protection of your most valuable assets: your
people, property, and financial resources. With guaranteed expertise, these audits
provide an authoritative and genuine evaluation, delivering improved results and
lifetime benefits. By prioritizing safety, you demonstrate your commitment to the
well-being and security of your workforce, backed by an approved and trusted
authority. <b>Now, you can confidently safeguard your organization, with no risk and
the best possible outcomes.</b>
</DescriptionPrincipal>
<ListContainer>
        <Listitem>
          <TitleList> Trust Us </TitleList>
          <UL>
            <P>Our expert Field Safety Consultants analyze your company's safety protocols,
ensuring thorough prevention of accidents and injuries. With appropriate measures
and timely corrective action, our audits make a significant difference in accident
prevention. <b>These efforts are viewed favorably by OSHA and other regulatory
agencies, further enhancing trust and compliance.</b></P>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={Icon5}/>
        </ImageContainer>
      </ListContainer>
        <ContainerServiceConsoulting>
        <Title>In-Depth Analysis</Title>
        <ContainerDesc>
        <Description>A safety survey goes beyond an inspection. <b>It involves a comprehensive analysis of
safety programs and behaviors on the jobsite</b>, assessing workers' safety knowledge
and understanding. It aims to identify evidence of adherence to your company's
safety policies and procedures, ensuring their effective implementation.</Description>
          {/* <ImageContainer> */}
          <FlipCard
                icon={Icon2}
                title= "»"
                title2= "With SafeStart"
                description=". You get a complete report (with analytics, photos and recommendations) following each audit – not just a “check-in-the box” checklist."
                />
          {/* </ImageContainer> */}
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>Objectivity</Title>
        <ContainerDesc>
        <Description>Our expert Field Safety Consultants deliver an unbiased assessment of your
company's safety systems and processes. With a neutral perspective, free from
familiarity and day-to-day routines, <b>they provide a genuine and authoritative review.</b></Description>
          <FlipCard
                icon={Icon3}
                title= "»"
                title2= "Cunning"
                description=". Putting one of your employees in charge of auditing other employees in your company is, at best, a potential conflict of interest. At worst, it could be like the fox guarding the henhouse."
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>Knowledge and Validation</Title>
        <ContainerDesc>
        <Description>With unmatched experience in safety audits across various business environments, <b>SafeStart is uniquely positioned to share best practices and industry-wide
knowledge.</b> By leveraging our expertise, we can enhance your company's safety
programs and strengthen their effectiveness.
</Description>
<FlipCard
                icon={Icon4}
                title= ""
                title2= ""
                description=""
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>Lower Business Impact </Title>
        <ContainerDesc>
        <Description>SafeStart's Field Safety Consultants specialize in on-site audits, ensuring a timely and
efficient process that minimizes disruptions to production. <b>Their sole focus is
conducting a thorough audit while maintaining the smooth operation of your jobsite.</b></Description>
          <FlipCard
                icon={Icon6}
                title= ""
                title2= ""
                description=""
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>Accuracy of Results</Title>
        <ContainerDesc>
        <Description>A third-party safety audit brings objectivity, providing an accurate review of
safety practices across different sections of your company's operations. <b>This helps to
ensure a thorough evaluation of safety standards throughout the organization.</b>

</Description>
<FlipCard
                icon={Icon7}
                title= ""
                title2= ""
                description=""
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ListContainer>
        <Listitem>
          <TitleList>Protect Your People With SafeStart Training</TitleList>
          <UL>
            <P>Make your workplace safe for business with SafeStart Training. Our objective,
accurate, and actionable third-party safety audits ensure a secure environment.
Contact us today to protect your valuable assets.<br/>
<b>Call us now to safeguard your workplace!</b></P><br/>
<b>Let us earn your trust; we won't let you down!</b>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={Icon8}/>
        </ImageContainer>
      </ListContainer>
        </ContainerSection>

      </Section>
      
      </Container>
    )
  }
  
  export default Auditory