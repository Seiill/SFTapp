import React from 'react'
import FlipCard from '../FlipCard/FlipCard'
import {Container, ParallaxImg, TitleContainer, Title,TitleList, Icon, Section, Description,DescriptionPrincipal, ContainerSection, ContainerDesc, ListContainer, Listitem, UL,Li,ImageList,ImageContainer,  ContainerServiceConsoulting, list} from './ServiceTemplateElements.js'

const ServiceTemplate = (title1, icon1, icon2, titleDesc, partonedesc, parttwodesc,iconflip1, titleflipprincipal , titleflipsecond,titleflipprincipal2, titleflipsecond2, iconflip2, descriptionflip, descriptionflip2, iconflip3, titleflipprincipal3,titleflipsecond3,descriptionflip3, title2, seconddescA, seconddescB, titleDesctwo, descTwoPartOne, descTwoPartTwo, titleDescthree, descThreePartOne, descThreePartTwo, titleDescFour,list  ) => {
  return (
    <Container>
      <ParallaxImg >
        <TitleContainer>
            <Title>{title1}</Title>
            <Icon src={icon1}></Icon>
        </TitleContainer>
      </ParallaxImg>
      <Section>
        <ContainerSection>
        <DescriptionPrincipal>
        <b>{titleDesc}</b><br/>
          {partonedesc} <b>{parttwodesc}</b></DescriptionPrincipal>
        <ContainerServiceConsoulting>
        <Title>{title2}</Title>
        <ContainerDesc>
        <Description>{seconddescA}<b>{seconddescB}</b></Description>
          {/* <ImageContainer> */}
          <FlipCard
                icon={{iconflip1}}
                title= {titleflipprincipal}
                title2= {titleflipsecond}
                description={descriptionflip}
                />
          {/* </ImageContainer> */}
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>{titleDesctwo}</Title>
        <ContainerDesc>
        <Description>{descTwoPartOne} <b>{descTwoPartTwo}</b></Description>
          <FlipCard
                icon={{iconflip2}}
                title= {titleflipprincipal2}
                title2= {titleflipsecond2}
                description={descriptionflip2}
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        <ContainerServiceConsoulting>
        <Title>{titleDescthree}</Title>
        <ContainerDesc>
        <Description>{descThreePartOne}
<b>{descThreePartTwo}</b></Description>
<FlipCard
                icon={{iconflip3}}
                title= {titleflipprincipal3}
                title2= {titleflipsecond3}
                description={descriptionflip3}
                />
        </ContainerDesc>
        </ContainerServiceConsoulting>
        </ContainerSection>
        <ListContainer>
        <Listitem>
          <TitleList>{titleDescFour}</TitleList>
          <UL>
            <Li>{list}</Li>
          </UL>
        </Listitem>
        <ImageContainer>
        <ImageList src={{icon2}}/>
        </ImageContainer>
      </ListContainer>    
      </Section>
      
      </Container>
  )
}

export default ServiceTemplate