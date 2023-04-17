import React from 'react';
import Icon1 from '../../images/SVG/consulting.svg'
import Icon2 from '../../images/consoultingworker-one.jpeg'
import Icon3 from '../../images/consoultineconomy.jpg'
import Icon4 from '../../images/nocompliance.jpg'
import Icon5 from '../../images/consoultingfallprotection.jpg'
import backgroundImage from '../../images/auditorypll.jpeg'
import FlipCard from '../FlipCard/FlipCard'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer, ContainerServiceConsoulting, P} from './servicesElements'

const Auditory = (/* subtitle,description,img,alt */) => {
    return (
      <Container>
      <ParallaxImg img={backgroundImage}>
        <TitleContainer>
            <Title>Audits & Inspection</Title>
            <Icon src={Icon1}></Icon>
        </TitleContainer>
      </ParallaxImg>
      <Section>
        <ContainerSection>
        <DescriptionPrincipal>
        <b>An Audit is More than An Inspection</b><br/>
        Third-party safety Audits are the single most effective weapon you have at your disposal to protect your most valuable assets: your people, property and financial resources.
</DescriptionPrincipal>
<ListContainer>
        <Listitem>
          <TitleList> Trust Us </TitleList>
          <UL>
            <P>Our expert Field Safety Consultants research, review and analyze your company’s safety protocols and provide you with appropriate measures you can take to help prevent accidents and injury. Our thorough audits can make a substantial difference in the prevention of such accidents, and, with appropriate and timely corrective action, can be viewed favorably by OSHA and other regulatory agencies if a serious incident does occur.</P>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={Icon5}/>
        </ImageContainer>
      </ListContainer>
        <ContainerServiceConsoulting>
        <Title>In-Depth Analysis</Title>
        <ContainerDesc>
        <Description>A safety survey is not an inspection; it is an in-depth analysis of safety programs and behaviors on the jobsite, checking safety knowledge and understanding of your workers and looking for evidence that your company’s safety policies and procedures are being followed.</Description>
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
        <Description>Our Field Safety Consultants provide a completely neutral assessment and review of your company’s safety systems and processes <b>without the natural familiarity that occurs with company co-workers and day-to-day routines.</b> </Description>
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
        <Description>SafeStart has unmatched experience conducting safety audits in all types of business environments and we’re able to share best practices and industry-wide <b>knowledge that can strengthen your company’s safety programs.</b>
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
        <Description>SafeStart’s Field Safety Consultants can visit a jobsite for the sole purpose of conducting an audit and get the job done in a timely, <b>efficient manner without interrupting production.</b></Description>
          <FlipCard
                icon={Icon3}
                title= ""
                title2= ""
                description=""
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>Accuracy of Results</Title>
        <ContainerDesc>
        <Description>Due to the built-in objectivity, the results of a third-party Paragon safety audit provide a <b>more accurate review of safety practices within different sections of the company’s operations.</b>

</Description>
<FlipCard
                icon={Icon4}
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
            <P>To ensure your workplace is safe for business, you need an objective, accurate, actionable third-party safety audit, and that’s what you get with Paragon Safety Group.   <b>Contact us today to begin the process of protecting your assets.</b></P>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={Icon5}/>
        </ImageContainer>
      </ListContainer>
        </ContainerSection>

      </Section>
      
      </Container>
    )
  }
  
  export default Auditory