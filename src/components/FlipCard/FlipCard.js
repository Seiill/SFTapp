import React,{ useRef, useState, useEffect } from 'react';
import { TbHandFinger} from 'react-icons/tb';
import {FlipCardContent, ArrowIconContainer, FlipCardInner, FlipCardFront,FlipCardBack,Title,Title2,Description, ImgFront} from './FlipCardElements'

const isElementVisible = (element) => {
    const elementPosition = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visibilityThreshold = elementPosition.height / 2;
  
    return (
      elementPosition.top < windowHeight - visibilityThreshold &&
      elementPosition.bottom > visibilityThreshold
    );
  };
const FlipCard = (props)=>{
    const flipCardRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const element = flipCardRef.current;
          if (!element) return;
    
          const visible = isElementVisible(element);
          setIsVisible(visible);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div ref={flipCardRef}>
        <FlipCardContent>
             <ArrowIconContainer isVisible={isVisible}>
          <TbHandFinger size={54} /> 
        </ArrowIconContainer>
            <FlipCardInner>
                <FlipCardFront>
                    <ImgFront src={props.icon}></ImgFront>
                    <Title>{props.title}</Title>
                </FlipCardFront>
                <FlipCardBack>
                    <Title2>{props.title2} </Title2>
                    <Description>{props.description}</Description>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCardContent>    
        </div>
        
    )
}

export default FlipCard;