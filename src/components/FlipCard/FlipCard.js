import React from 'react';
import {FlipCardContent, FlipCardInner, FlipCardFront,FlipCardBack,Title,Title2,Description, ImgFront} from './FlipCardElements'

const FlipCard = (props)=>{
    return(
        <FlipCardContent>
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
    )
}

export default FlipCard;