import React from 'react';
import Icon1 from '../../images/SVG/construction.svg'
import Icon2 from '../../images/riskscontruction.jpeg'
import Icon3 from '../../images/image003.jpg'
import Icon4 from '../../images/electrocution.jpg'
import Icon5 from '../../images/fallin.jpeg'
import Icon6 from '../../images/const-end.jpeg'
import Icon7 from '../../images/falls.jpg'
import FlipCard from '../FlipCard/FlipCard'
import backgroundImage from '../../images/ctparallax2.jpg'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting} from './servicesElements'
const Constructions = () => {
  const liStyle = {
    listStyleType: 'disc', 
    margin: '0 0 10px 0',  
  };
  const liStyleD = { 
    margin: '0 0 10px 0',  
  };
  return (
    <Container>
    <ParallaxImg img={backgroundImage} >
      <TitleContainer>
          <Title>Safety In Construction</Title>
          <Icon src={Icon1}></Icon>
      </TitleContainer>
    </ParallaxImg>
    <Section>
      <ContainerSection>
      <DescriptionPrincipal>
      <b>DID YOU KNOW?</b><br/>According to the NCS, a typical on-the-job back injury can incur direct costs of over <b>$10,000, with indirect costs reaching up to $100,000.</b></DescriptionPrincipal>
      <ContainerServiceConsoulting>
      <Title>Risks of Construction Work</Title>
      <ContainerDesc>
      <Description>According to data from OSHA, construction accidents typically fall into one of four categories. These are known as the “Construction Focus Four” hazards</Description>
        {/* <ImageContainer> */}
        <FlipCard
              icon={Icon2}
              title= ""
              title2= "Our Safety Training"
              description="SafeStart Training’s on-site or off-site safety training will arm your team with the tools to perform their job safely, whether they need OSHA 10-Hour or 30-Hour Training or courses on other topics such as Fall Protection, Rigging & Signaling Qualification, Forklift Lift Certification, First Aid/CPR/AED, and many others. "
              />
        {/* </ImageContainer> */}
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Caught-in or caught-between</Title>
      <ContainerDesc>
      <Description>This type of incident occurs when an employee is caught in a piece of machinery or heavy equipment, or when an employee is pinned between a piece of heavy equipment/machinery and another machine, tool, vehicle, or environmental fixture.</Description>
        <FlipCard
              icon={Icon3}
              title= " "
              title2= "safety professionals helps"
              description="So are the indirect costs that follow incidents, including the lost productivity that occurs when people turn their attention to dealing with the aftermath. On the flip side, a safe work environment increases workers’ morale and productivity, which increases efficiency and profit margins."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Electrocution</Title>
      <ContainerDesc>
      <Description>The construction site is flowing with electricity — from lighting fixtures to power tools. Without proper handling of electrical equipment, employees are at risk of electrocution.</Description>
<FlipCard
              icon={Icon4}
              title= "  "
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Falls </Title>
      <ContainerDesc>
      <Description>Falls are the most common cause of injuries on construction sites. They may happen while performing common off the ground tasks; such using ladders, working off scaffolds, etc.</Description>
<FlipCard
              icon={Icon7}
              title= "  "
              title2= ""
              description=""
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Struck-by</Title>
      <ContainerDesc>
      <Description>This final type of incident can occur in four different ways: struck-by flying objects, struck-by falling objects, struck-by swinging objects and struck-by rolling objects. A flying object can be  misfired from a nail gun or a piece of a saw’s blade that chips off during use. Falling and swinging objects typically come from overhead work and suspended loads.</Description>
<FlipCard
              icon={Icon5}
              title= "  "
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      </ContainerSection>
      <ListContainer>
      <Listitem>
        <TitleList>Safety Programs for Construction Workers</TitleList>
        <UL>
          <Li style={liStyleD}>To protect your workers on the job, there are many safety programs that may apply to your daily operation, such as: </Li>
          <Li style={liStyle}>Fall protection and prevention</Li>
          <Li style={liStyle}>Scaffolding safety</Li>
          <Li style={liStyle}>Trenching and shoring safety</Li>
          <Li style={liStyle}>Demolition safety</Li>
          <Li style={liStyle}>Material handling</Li>
        </UL>
      </Listitem>
      <ImageContainer>
      <ImageList src={Icon6}/>
      </ImageContainer>
    </ListContainer>  
    </Section>
    
    </Container>
  )
}

export default Constructions