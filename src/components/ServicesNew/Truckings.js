import React from 'react'
import backgroundImage from '../../images/mfparallax.jpeg'
import Icon1 from '../../images/SVG/manufacturing.svg'
import Icon2 from '../../images/tranOne.jpeg'
import Icon3 from '../../images/tranTwo.jpeg'
import Icon4 from '../../images/tranThree.jpeg'
import Icon5 from '../../images/tranFour.jpeg'
import Icon6 from '../../images/tranFive.jpg'
import Icon7 from '../../images/tranSix.jpg'
import Icon8 from '../../images/tranSeven.jpg'
import Icon9 from '../../images/tranEight.jpg'
import FlipCard from '../FlipCard/FlipCard'
import {Container, ParallaxImg, TitleContainer,DescriptionFirst, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting} from './servicesElements'
const Training = () => {
  return (
    <Container>
    <ParallaxImg img={backgroundImage}>
      <TitleContainer>
          <Title>Safety Transportation</Title>
          <Icon src={Icon1}></Icon>
      </TitleContainer>
    </ParallaxImg>
    <Section>
      <ContainerSection>
      <DescriptionPrincipal>
      <b>DID YOU KNOW?</b><br/>According to data from the National Highway Traffic Safety Administration (NHTSA), 885 large truck occupants perished in crashes in 2018. <b>This is the highest fatality count in 30 years.</b></DescriptionPrincipal>
      <ContainerServiceConsoulting>
        <DescriptionFirst>The trucking industry is the backbone of
progress. Everything would come to a risky halt without it. We know
your operation because we have work experience of it. We understand
the pace of your work, the regulatory requirements you are subject to,
your workforce, and your unique struggles.
Start each day with the assurance your employees have access to the
information they need to do their work efficiently, competently, safely,
and compliant.</DescriptionFirst>
      <Title> Risks of Transportation and <br/>Long-haul Trucking Work</Title>
      <ContainerDesc>
      <Description>Vehicle crashes may be the most apparent hazard to transport workers, but there are countless other job dangers. <b>Here are some lesser-known risks faced by transport workers.</b></Description>
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
      <Title>Falls</Title>
      <ContainerDesc>
      <Description>The door to the driver’s seat of an oversized vehicle is usually in an awkward, high position. Drivers can injure themselves by falling while entering or exiting their vehicles.</Description>
        <FlipCard
              icon={Icon3}
              title= ""
              title2= "safety professionals helps"
              description="So are the indirect costs that follow incidents, including the lost productivity that occurs when people turn their attention to dealing with the aftermath. On the flip side, a safe work environment increases workers’ morale and productivity, which increases efficiency and profit margins."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Ergonomic injuries</Title>
      <ContainerDesc>
      <Description>Drivers can sustain injuries from sitting in awkward, uncomfortable positions for long periods while driving.</Description>
<FlipCard
              icon={Icon4}
              title= ""
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title> Fires, explosions, and burns!</Title>
      <ContainerDesc>
      <Description>Drivers who transport contaminants or hazardous chemicals are at risk of fires, explosions, and burns if their cargo is improperly stored, or in the event of a collision.</Description>
<FlipCard
              icon={Icon5}
              title= ""
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Poisoning from exhaust gases</Title>
      <ContainerDesc>
      <Description>Truckers can be injured or killed from a carbon monoxide leak</Description>
<FlipCard
              icon={Icon6}
              title= ""
              title2= "safety consultants"
              description="SafeStart’s trained safety consultants will conduct comprehensive site safety surveys to identify unsafe acts and conditions and will recommend practical solutions for the mitigation of those risks."
              />
      </ContainerDesc>
      </ContainerServiceConsoulting>
      <ContainerServiceConsoulting>
      <Title>Struck by/Caught between injuries</Title>
      <ContainerDesc>
      <Description>Truckers can be injured when performing maintenance on their vehicles or caught between trailers when trying to disengage one from the other.</Description>
<FlipCard
              icon={Icon7}
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
        <UL>

          <Li>Having written safety programs is a great way to prevent workplace incidents and injuries.</Li>
          <Li>Having a formal series of safety programs ensures that all employees have undergone the same training and are working with the same knowledge base regarding workplace tools and materials.</Li>
          <Li>Moreover, Written safety programs ensure uniform compliance throughout the company.</Li>
        </UL>
      </Listitem>
      <ImageContainer>
      <ImageList src={Icon8}/>
      </ImageContainer>
    </ListContainer>
    <ListContainer>
      <Listitem>
        <TitleList>So we can help you</TitleList>
        <UL>
          <Li>Defensive Driving for the CDL Drivers.</Li>
          <Li>Slips/Trips and Falls Prevention for the Truck Drivers.</Li>
          <Li>Truck Drivers Safety and Health–Ergonomics.</Li>
          <Li>Chemical handling and storage.</Li>
          <Li>Forklift and scissor lift.</Li>
          <Li>{`Hazard Communication (Safety Data Sheets (SDS)).`}</Li>
          <Li>SOPs, inspection, and audit forms.</Li>
          <Li>Clear method to report an incident.</Li>
        </UL>
      </Listitem>
      <ImageContainer>
      <ImageList src={Icon9}/>
      </ImageContainer>
    </ListContainer>     
    </Section>
    
    </Container>
  )
}

export default Training