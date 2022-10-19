import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #fff;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const FlipCardInner = styled.div`
position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
`

export const FlipCardContent = styled.div`
background-color: transparent;
width: 370px;
min-width: 300px;
height: 40vh;
max-height: 250px;
perspective: 1000px;
    cursor: pointer;
  &:hover ${FlipCardInner}{
    transform: rotateY(180deg);
  }
`
export const FlipCardFront = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #edeceb;
  color: black;
  z-index: 2;
  padding: 5px;
`
export const FlipCardBack = styled.div`

position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
background-color: #ede4dd;
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
`
export const Title = styled.h2`
position: absolute;
bottom: 1rem;
text-shadow: 1px 1px 3px rgba(12, 0, 9, 1); 
color: #ede4dd;
`
export const Title2 = styled.h4`
margin: 1rem 1rem;
color: #ec6c3d;
`
export const Description = styled.p`
text-align: center;
margin: 1rem 1rem;
color: #000;
font-size: 0.9rem;
`
export const ImgFront = styled.img`
width:100%;
height:100%;
object-fit: cover;

`