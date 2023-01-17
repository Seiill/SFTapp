
import React from 'react';
import backgroundImage from '../../images/trparallax.jpeg'
import Icon1 from '../../images/SVG/training.svg'
import Icon2 from '../../images/trainingworkplace.jpg'
import Icon3 from '../../images/powertruck.jpg'
import FlipCard from '../FlipCard/FlipCard'
import{ContainerTrainings, TrainingType } from './TrainingElements'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting} from './servicesElements'
import { Button } from '../ButtonElement';
const Trainings = () =>{
    return(
        <Container>
      <ParallaxImg img={backgroundImage}>
        <TitleContainer>
            <Title>Safety Training</Title>
            <Icon src={Icon1}></Icon>
        </TitleContainer>
      </ParallaxImg>
      <Section>
        <ContainerSection>
        <DescriptionPrincipal>
        <b>DID YOU KNOW?</b><br/>
        Workplace safety is a shared responsibility <b>between employers and their employees.</b></DescriptionPrincipal>
        <ContainerServiceConsoulting>
        <Title>We provide learners</Title>
        <ContainerDesc>
        <Description>The provide learners with a high-level overview of a number of safety topics and safety rules to comply with OSHA standards. <b>Specifically, our safety orientation training covers an introduction to generic safe work practices various worksite arrangements</b>, the safe use of tools and equipment, and procedures for what to do in the event an emergency occurs</Description>
          {/* <ImageContainer> */}
          <FlipCard
                icon={Icon2}
                title= " "
                title2= "Our Safety Training"
                description="SafeStart Training’s on-site or off-site safety training will arm your team with the tools to perform their job safely, whether they need OSHA 10-Hour or 30-Hour Training or courses on other topics such as Fall Protection, Rigging & Signaling Qualification, Forklift Lift Certification, First Aid/CPR/AED, and many others. "
                />
          {/* </ImageContainer> */}
        </ContainerDesc>
        </ContainerServiceConsoulting>
        </ContainerSection>
        <ListContainer>
        <Listitem>
          <TitleList>Safety Basics: Work related topics:</TitleList>
          <UL>
            <Li>Health Hazards</Li>
            <Li>Hazard Communication</Li>
            <Li>Mobile elevated platforms</Li>
            <Li>Fire Safety</Li>
            <Li>Industrial power truck </Li>
            <Li>Hot Work</Li>
            <Li>Trenching & Excavations</Li>
            <Li>Work Zones</Li>
            <Li>Temperature Extremes</Li>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={Icon3}/>
        </ImageContainer>
      </ListContainer>    
      </Section>
      <Section>
        <ContainerTrainings>
          <TrainingType color='#F7B89D'>
          <Listitem>
          <TitleList>30-Hour Training</TitleList>
          <UL>
            <Li>Updated Material Content</Li>
            <Li>Learn OSHA's Focus Four Hazards</Li>
            <Li>Officially Registered OSHA 30 Hour Card (DOL Card)</Li>
            <Li>Official Certificate of Completion</Li>
            <Li>Hazard Communication/Globally Harmonized System </Li>
            <Li>Fire Prevention</Li>
            <Li>Scaffolds Safety</Li>
            <Li>Electrical Safety</Li>
            <Li>Excavation Safety</Li>
            <Li>Fall Protection</Li>
            <Li>Cranes Safety</Li>
            <Li>Health Hazards in Construction</Li>
            <Li>Welding & Cutting</Li>
            <Li>And More...</Li>
          </UL>
          <Button>More Info</Button>
        </Listitem>
        
          </TrainingType>
          <TrainingType color='#BBBBBB'>
          <Listitem>
          <TitleList>10-Hour Training</TitleList>
          <UL>
            <Li>Learn OSHA's Focus Four Hazards</Li>
            <Li>Introduction to OSHA</Li>
            <Li>Officially Registered OSHA 10 Hour Card (DOL Card)</Li>
            <Li>Official Certificate of Completion</Li>
            <Li>General Awareness about most of the hazards employees encounter</Li>
            <Li>Introduction to OSHA</Li>
            <Li>Fall Protection</Li>
            <Li>Electrical Safety</Li>
            <Li>Struck-By/Caught-In or Between</Li>
            <Li>Personal Protective Equipment (PPE)</Li>
            <Li>Health Hazards</Li>
            <Li>Material Handling</Li>
          </UL>
          <Button>More Info</Button>
        </Listitem>
        
          </TrainingType>
        </ContainerTrainings>
      </Section>
      
      </Container>
    )
}

export default Trainings