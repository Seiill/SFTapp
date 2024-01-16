import React from 'react';
import backgroundImage from '../../images/mfparallax.jpeg'
import Icon1 from '../../images/SVG/manufacturing.svg'
import Icon2 from '../../images/manufacturingppe.jpg'
import Icon3 from '../../images/machine-guarding.jpeg'
import Icon4 from '../../images/electr.jpg'
import Icon5 from '../../images/image004.jpg'
import Icon6 from '../../images/Catch and caught.jpeg'
import Icon7 from '../../images/workplace.jpg'
import Icon8 from '../../images/actionplan.jpg'
import FlipCard from '../FlipCard/FlipCard'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting} from './servicesElements'
const Manufacturing = () => {
  const liStyle = {
    listStyleType: 'disc', 
    margin: '0 0 10px 0',  
  };
  return (
    <Container>
    <ParallaxImg img={backgroundImage}>
      <TitleContainer>
          <Title>Safety Manufacturing</Title>
          <Icon src={Icon1}></Icon>
      </TitleContainer>
    </ParallaxImg>
    <Section>
      <ContainerSection>
      <DescriptionPrincipal>
      <b>DID YOU KNOW?</b><br/>Although there have been many improvements in safety in the manufacturing industry,  there are still many things that you can do within your workplace to ensure that your employees work in safe hands.<br/><br/>The
manufacturing industry affects every facet of life. SafeStart Training understands the
intricacy of the work, the regulatory requirements you are subject to, and that keeping
the workforce safe is at the top of the list.<br/><br/>
<b>Let us earn your trust; we won’t let you down!</b></DescriptionPrincipal>
      <ContainerServiceConsoulting>
      <Title> Slips/trips/and/falls</Title>
      <ContainerDesc>
      <Description>Manufacturing workers can slip on a slippery floor or fall from heights if there are insufficient guardrails or if they aren’t wearing proper PPE. <b>Falls are the #1 cause of worker death</b>, injury, and time away from work.</Description>
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
      <Title>Insufficient or improper machine guarding</Title>
      <ContainerDesc>
      <Description>Machine guarding is essential to keep workers safe and at a proper distance from hazardous areas at all times. OSHA frequently cites manufacturing companies for the incorrect installation of machine guarding, and this type of hazard leads to countless struck by/caught in/caught between incidents.</Description>
        <FlipCard
              icon={Icon3}
              title= ""
              title2= "safety professionals helps"
              description="So are the indirect costs that follow incidents, including the lost productivity that occurs when people turn their attention to dealing with the aftermath. On the flip side, a safe work environment increases workers’ morale and productivity, which increases efficiency and profit margins."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Electrocution and electrical fires</Title>
      <ContainerDesc>
      <Description>Nearly every piece of equipment within a manufacturing facility is powered by electricity. Incidents involving electricity are often caused by exposed wires, open electrical panels, and improperly installed equipment.</Description>
<FlipCard
              icon={Icon4}
              title= ""
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title> Powered industrial trucks</Title>
      <ContainerDesc>
      <Description>Many industrial trucks are used for manufacturing work, such as forklifts. <b>Powered industrial trucks can cause injuries due to outdated machinery and poorly trained operators.</b></Description>
<FlipCard
              icon={Icon5}
              title= ""
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Lockout/Tagout <b>LOTO</b></Title>
      <ContainerDesc>
      <Description><b>LOTO</b> is a procedure that ensures machines' energy sources are properly shut off and cannot start again until the completion of maintenance or repair.<br/> Maintenance workers can suffer severe injury or death when LOTO protocols are ignored.
Additionally, manufacturing workers can suffer from injuries due to high noise levels, exposure to chemical solvents during manufacturing and cleaning processes, lifting awkward/heavy objects, and more.
</Description>
<FlipCard
              icon={Icon6}
              title= ""
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      </ContainerSection>
      <ListContainer>
      <Listitem>
        <TitleList>now you know what you need</TitleList>
        <UL >
          <Li style={liStyle}>Employers must prioritize a safe workplace.</Li>
          <Li style={liStyle}>Have written safety programs to effectevely prevent incidents and injuries. </Li>
          <Li style={liStyle}>And finally, ensure consistent training and knowledge for all employees.</Li>
        </UL>
      </Listitem>
      <ImageContainer>
      <ImageList src={Icon7}/>
      </ImageContainer>
    </ListContainer>
    <ListContainer>
      <Listitem>
        <TitleList>So we can help you with your:</TitleList>
        <UL>
          <Li>Lock Out/Tagout </Li>
          <Li>Fall Protection and Prevention</Li>
          <Li>Machine Guarding</Li>
          <Li>Emergency Action Plan</Li>
          <Li>Chemical Handling and Storage</Li>
          <Li>Forklift and Scissor lift</Li>
          
        </UL>
      </Listitem>
      <ImageContainer>
      <ImageList src={Icon8}/>
      </ImageContainer>
    </ListContainer>     
    </Section>
    
    </Container>
  )
}

export default Manufacturing