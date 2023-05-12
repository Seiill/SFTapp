
import React from 'react';
import backgroundImage from '../../images/trparallax.jpeg'
import Icon1 from '../../images/SVG/training.svg'
import Icon2 from '../../images/tr3s.jpeg'
import Icon3 from '../../images/trainingback.jpeg'
import Icon4 from '../../images/backinj.jpeg'
import Icon5 from '../../images/firstaid.jpeg'
import Icon6 from '../../images/sfallsp.jpeg'
import Icon7 from '../../images/machineguard.jpg'
import Icon8 from '../../images/PPE.jpeg'
import Icon9 from '../../images/driving.jpg'

import FlipCard from '../FlipCard/FlipCard'
import{ContainerTrainings, TrainingType, CardsTraingns, CardOut, CardContent, ImageCard } from './TrainingElements'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting, P} from './servicesElements'
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
        Workplace safety is a shared: <br/> responsibility It’s critical for safety to be at the forefront of any organization, regardless of size or industry. By upholding a safe work environment, organizations <b>can minimize the risk of costly on-site accidents and employee injuries-boosting staff morale and maximizing productivity.</b> Through education, employees will be able to better understand the consequences of unsafe behaviors—increasing their likelihood of committing to safe work practices over time and deterring possible accidents.</DescriptionPrincipal>
        <ContainerServiceConsoulting>
        <Title>Comprehensive Employee Safety Orientation</Title>
        <ContainerDesc>
        <Description>NOW UPDATED TO COVER GHS! No matter what industry you operate in,all employers have a responsibilty to properly orient workers to the safety issues they will face on the job, before they begin work. The goal of this training program is to provide employees with a thorough, comprehensive safety orientation. Safety is a major part of each employee's job, no matter what type of job they perform. It is vitally important that you get them started right, thinking about safety every day.</Description>
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
        <Section>
        <Title>Time Our Course</Title>
        <ContainerTrainings>
          <TrainingType color1='#BBBBBB' color2='#e7e7e7' color3>
          <Listitem>
          <TitleList>30-Hour Training</TitleList>
          <UL>
            <Li>Updated Material Content</Li>
            <Li>Learn OSHA's Focus Four Hazards</Li>
            <Li>Officially Registered OSHA 30 Hour Card (DOL Card)</Li>
            <Li>Official Certificate of Completion.</Li>
            <Li>Hazard Communication/Globally Harmonized System. </Li>
            <Li>Fire Prevention.</Li>
            <Li>Scaffolds Safety.</Li>
            <Li>Electrical Safety.</Li>
            <Li>Excavation Safety.</Li>
            <Li>Fall Protection.</Li>
            <Li>Cranes Safety.</Li>
            <Li>Health Hazards in Construction.</Li>
            <Li>Welding & Cutting.</Li>
            <Li>And More...</Li>
          </UL>
          <Button to='/contactus'
                        smooth={true}
                        duration={500}
                        spy={true} exact= 'true'
                        offset={-80}>More Info</Button>
        </Listitem>
          </TrainingType>
          <TrainingType color2='#BBBBBB' color1='#e7e7e7' color3>
          <Listitem>
          <TitleList>10-Hour Training</TitleList>
          <UL>
            <Li>Learn OSHA's Focus Four Hazards</Li>
            <Li>Introduction to OSHA</Li>
            <Li>Officially Registered OSHA 10 Hour Card (DOL Card)</Li>
            <Li>Official Certificate of Completion.</Li>
            <Li>General Awareness about most of the hazards employees encounter.</Li>
            <Li>Introduction to OSHA.</Li>
            <Li>Fall Protection.</Li>
            <Li>Electrical Safety.</Li>
            <Li>Struck-By/Caught-In or Between.</Li>
            <Li>Personal Protective Equipment (PPE).</Li>
            <Li>Health Hazards.</Li>
            <Li>Material Handling.</Li>
            
          </UL>
          <Button to='/contactus'
                        smooth={true}
                        duration={500}
                        spy={true} exact= 'true'
                        offset={-80}>More Info</Button>
        </Listitem>
        
          </TrainingType>
        </ContainerTrainings>
      </Section>
      <Section>
      <Title >Experts Trainings</Title>
        <CardsTraingns>
        
          <CardOut>
            <CardContent>
              <Title>Driving safety: The Basics</Title>
              <ImageCard src={Icon9}></ImageCard>
              <P>Your employes do so much driving that it's easy for them to forget how dangerous it can be every year accidents claim almost...</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Preventing Back Injuries:</Title>
            <ImageCard src={Icon4}></ImageCard>
            <P>Workplaces are full of hazards, hazards that can hurt or kill us. One such hazard is the risks of back injury in the workplace.</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Emergency First Aid</Title>
            <ImageCard src={Icon5}></ImageCard>
            <P>First Aid is the inmediate care given to the injured or suddenly ill person. It is temporary assistence that is rendered until...</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Slips, Trips & Falls Prevention</Title>
            <ImageCard src={Icon6}></ImageCard>
            <P>Slips and falls are one of the leading causes of workplace injuries and over 50% of them occur at ground level.</P>
            

            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Machine Guarding</Title>
            <ImageCard src={Icon7}></ImageCard>
            <P>Class discusses common machine hazards, how to control them and how to stay stafe around moving machinery.</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>To the point: PPE</Title>
            <ImageCard src={Icon8}></ImageCard>
            <P>Workplaces typically present risks to workers safety and health.</P>
            </CardContent>
          </CardOut>
        </CardsTraingns>
        </Section>
        <ListContainer>
        <Listitem>
          <TitleList>Safety Basics: Work related topics:</TitleList>
          <UL>
            <Li>Health Hazards.</Li>
            <Li>Hazard Communication.</Li>
            <Li>Mobile elevated platforms.</Li>
            <Li>Fire Safety.</Li>
            <Li>Industrial power truck. </Li>
            <Li>Hot Work.</Li>
            <Li>Trenching & Excavations.</Li>
            <Li>Work Zones.</Li>
            <Li>Temperature Extremes.</Li>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={Icon3}/>
        </ImageContainer>
      </ListContainer>    
      </Section>
      
      </Container>
    )
}

export default Trainings