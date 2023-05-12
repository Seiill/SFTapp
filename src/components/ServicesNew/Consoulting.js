import React from 'react';
import Icon1 from '../../images/SVG/consulting.svg'
import Icon2 from '../../images/consoultingworker-one.jpeg'
import Icon3 from '../../images/consoultineconomy.jpg'
import Icon4 from '../../images/nocompliance.jpg'
import Icon5 from '../../images/PPE.jpeg'
import Icon6 from '../../images/SVG/SVG/loss-analysis.svg'
import Icon7 from '../../images/SVG/SVG/leading-lagging.svg'
import Icon8 from '../../images/cybersecurity.jpg'
import backgroundImage from '../../images/workplace.jpg'
import FlipCard from '../FlipCard/FlipCard'
import {Container,ContainerList, ContainerImg,FragImg, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting} from './servicesElements'

const Consoulting = (/* subtitle,description,img,alt */) => {
    return (
      <Container>
      <ParallaxImg img={backgroundImage}>
        <TitleContainer>
            <Title>Safety Consulting</Title>
            <Icon src={Icon1}></Icon>
        </TitleContainer>
      </ParallaxImg>
      <Section>
        <ContainerSection>
        <DescriptionPrincipal>
        <b>DID YOU KNOW?</b><br/>
          The benefits of maintaining a safe work environment in the workplace are many, but first and foremost <b>safety is about what you can do to send your workers home safely to their families at the end of the day.</b></DescriptionPrincipal>
        <ContainerServiceConsoulting>
        <Title>The Right Thing To Do</Title>
        <ContainerDesc>
        <Description>The benefits of maintaining a safe work environment in the workplace are many, but first and foremost <b>safety is about what you can do to send your workers home safely to their families at the end of the day.</b></Description>
          {/* <ImageContainer> */}
          <FlipCard
                icon={Icon2}
                title= "more"
                title2= "Our Safety Training"
                description="SafeStart Training’s on-site or off-site safety training will arm your team with the tools to perform their job safely, whether they need OSHA 10-Hour or 30-Hour Training or courses on other topics such as Fall Protection, Rigging & Signaling Qualification, Forklift Lift Certification, First Aid/CPR/AED, and many others. "
                />
          {/* </ImageContainer> */}
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
          <ContainerDesc>
          <ContainerImg>
            <FragImg src={Icon6}></FragImg></ContainerImg>
          
          <ContainerList>
          <Li>Body Part</Li>
          <Li>Nature of Injury</Li>
          <Li>Cause of Injury</Li>
          <Li>Years of Service</Li>
          </ContainerList>
          <ContainerList>
          <Li>Reporting Days Lag</Li>
          <Li>Class Code</Li>
          <Li>Benefit Type</Li>
          </ContainerList>
          <ContainerList>
          <Li>Day of Week</Li>
          <Li>Age of Claimant</Li>
          <Li>Location of Injury</Li>
          </ContainerList>
          </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>Improve Your Bottom Line</Title>
        <ContainerDesc>
        <Description>The practice of safety brings financial benefits to the table. A safe worksite impacts a company’s bottom line both directly and indirectly. <b>Costs associated with accidents including lost wages, Workers’ Comp claims, insurance costs, and legal fees are minimized in a safe work environment.</b></Description>
          <FlipCard
                icon={Icon3}
                title= "more"
                title2= "Safety professionals helps"
                description="So are the indirect costs that follow incidents, including the lost productivity that occurs when people turn their attention to dealing with the aftermath. On the flip side, a safe work environment increases workers’ morale and productivity, which increases efficiency and profit margins."
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
          <ContainerDesc>
            <Title>Leading VS Lagging Indicators</Title>
          <ContainerImg>
            <FragImg src={Icon7}></FragImg></ContainerImg>
          </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>The Cost of Noncompliance</Title>
        <ContainerDesc>
        <Description>An OSHA inspection is likely at any time. For that reason, it is important to have a well-implemented security program. Thats why I ask you,
<b>What does a penalty cost more o Invest in your company's safety program?</b></Description>
<FlipCard
                icon={Icon4}
                title= "more"
                title2= "Safety consultants"
                description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        </ContainerSection>
        <ListContainer>
        <ImageContainer>
        <ImageList src={Icon8}/>
        </ImageContainer>
        <Listitem>
          <TitleList>POLICY WIRE -LEGAL UPDATES /NEWSLETTER</TitleList>
          <UL>
            <Li>How to create a workplace safety</Li>
            <Li>Heat related safety tips</Li>
            <Li>Distracted driving awareness: Policies</Li>
            <Li>Behavior - Based safety explained</Li>
            <Li>First Aid in the workplace: Are you prepared?</Li>
            <Li>10 Ways to control your MOD. How to overcome safety complacency in the workplace.</Li>
          </UL>
        </Listitem>
      </ListContainer> 
        <ListContainer>
        <Listitem>
          <TitleList>Other benefits </TitleList>
          <UL>
            <Li><b>Prevent</b> workplace injuries and illnesses</Li>
            <Li><b>Improve</b> compliance with laws and regulations</Li>
            <Li><b>Reduce</b> costs, including significant reductions in workers' compensation premiums</Li>
            <Li><b>Engage</b> workers</Li>
            <Li><b>Enhance</b> their social responsibility goals</Li>
            <Li><b>Increase</b> productivity and enhance overall business operations</Li>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={Icon5}/>
        </ImageContainer>
      </ListContainer>    
      </Section>
      
      </Container>
    )
  }
  
  export default Consoulting