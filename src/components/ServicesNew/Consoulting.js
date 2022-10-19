import React from 'react';
import Icon1 from '../../images/SVG/consulting.svg'
import Icon2 from '../../images/consoultingworker-one.jpg'
import Icon3 from '../../images/consoultineconomy.jpg'
import Icon4 from '../../images/consoulting-penalty.jpeg'
import Icon5 from '../../images/consoultingfallprotection.jpg'
import backgroundImage from '../../images/0001.jpg'
import FlipCard from '../FlipCard/FlipCard'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting} from './servicesElements'

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
                title= "Pick Me"
                title2= "Our Safety Training"
                description="SafeStart Training’s on-site or off-site safety training will arm your team with the tools to perform their job safely, whether they need OSHA 10-Hour or 30-Hour Training or courses on other topics such as Fall Protection, Rigging & Signaling Qualification, Forklift Lift Certification, First Aid/CPR/AED, and many others. "
                />
          {/* </ImageContainer> */}
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>Improve Your Bottom Line</Title>
        <ContainerDesc>
        <Description>The practice of safety brings financial benefits to the table. A safe worksite impacts a company’s bottom line both directly and indirectly. <b>Costs associated with accidents including lost wages, Workers’ Comp claims, insurance costs, and legal fees are minimized in a safe work environment.</b></Description>
          <FlipCard
                icon={Icon3}
                title= "Pick Me"
                title2= "Safety professionals helps"
                description="So are the indirect costs that follow incidents, including the lost productivity that occurs when people turn their attention to dealing with the aftermath. On the flip side, a safe work environment increases workers’ morale and productivity, which increases efficiency and profit margins."
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>The Cost of Noncompliance</Title>
        <ContainerDesc>
        <Description>An OSHA inspection is likely at any time. For that reason, it is important to have a well-implemented security program. Thats why I ask you,
<b>What does a penalty cost more o Invest in your company's safety program?</b></Description>
<FlipCard
                icon={Icon4}
                title= "Pick Me"
                title2= "Safety consultants"
                description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        </ContainerSection>
        <ListContainer>
        <Listitem>
          <TitleList>Other benefits </TitleList>
          <UL>
            <Li>Emergency Response Program</Li>
            <Li>Fall Protection</Li>
            <Li>Hazard Communication Standard</Li>
            <Li>Injury and Illness Prevention Plan</Li>
            <Li>OSHA Recordkeeping (OSHA Reporting)</Li>
            <Li>Powered Industrial Trucks (Forklift)</Li>
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