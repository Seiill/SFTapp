
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
        Workplace safety is a vital shared: <br /> responsibility that builds trust. It's crucial for every
organization, regardless of size or industry, to make safety a top priority. By maintaining a safe work environment, companies <b>can minimize the risk of expensive accidents and employee injuries</b>. This boosts staff morale and maximizes productivity. Educating employees about the dangers of unsafe behaviors helps them understand the importance of practicing safe work habits. This, in turn, reduces the likelihood of accidents occurring.</DescriptionPrincipal>
        <ContainerServiceConsoulting>
        <Title>Comprehensive Employee Safety Orientation</Title>
        <ContainerDesc>
        <Description>Regardless of your industry, it is the responsibility of all employers to ensure that
workers receive proper safety orienta4on before starting their job. The objective of this training program is to deliver a thorough and comprehensive safety orientation for employees. <b>Safety plays a crucial role in every employee's job, regardless of their specific role</b>. It is of utmost importance to start them off right, installing a mindset of daily safety consciousness. </Description>
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
                        offset={-80}>Contact Us
          </Button>
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
                        offset={-80}>Contact Us
          </Button>
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
              <P>Due to the frequent driving your employees undertake, it's easy for them to overlook the inherent dangers. Each year, a significant number of accidents claim lives...</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Preventing Back Injuries:</Title>
            <ImageCard src={Icon4}></ImageCard>
            <P>Workplaces are filled with hazards that pose a potential threat to our well-being and even our lives. One specific hazard that deserves atention is the risk of back injuries in the workplace.</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Emergency First Aid</Title>
            <ImageCard src={Icon5}></ImageCard>
            <P>First Aid offers temporary assistance until professional medical help can be obtained or until the person's condition stabilizes.</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Slips, Trips & Falls Prevention</Title>
            <ImageCard src={Icon6}></ImageCard>
            <P>Slips and falls rank among the primary causes of workplace injuries, with more than 50% of these incidents happening at ground level..</P>
            

            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>Machine Guarding</Title>
            <ImageCard src={Icon7}></ImageCard>
            <P>The training covers common machine hazards, methods to control them, and essential guidelines for maintaining safety in the presence of moving machinery.</P>
            
            </CardContent>
          </CardOut>
          <CardOut>
            <CardContent>
            <Title>To the point: PPE</Title>
            <ImageCard src={Icon8}></ImageCard>
            <P>Workplaces inherently harbor potential risks that can impact the safety and overall well-being of workers. It is imperative for organizations to prioritize the trustworthiness of their work environments by actively addressing and mitigating these risks, ensuring the utmost safety and health of their employees.</P>
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